package account

import (
  "MuShare/datatype"
  "MuShare/db/models"
  "time"
  "regexp"
  "MuShare/datatype/request/user"
  "strconv"
  "MuShare/utils"
  "github.com/aliyun/aliyun-oss-go-sdk/oss"
  "strings"
  "MuShare/conf"
  "fmt"
)

const DEFAULTSHEETNAME  = "我的收藏"

func (this *Account) Register(body *user.Account, ossConf conf.OSS) datatype.Response {
  //check mail
  reg := regexp.MustCompile(`^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$`)
  sel := [...]bool{true, true}
  u := models.User{}
  sheet := models.Sheet{}
  salt := models.Salts{}
  // begin transaction
  tx := this.DB.Begin()
  if (body.Password == "") {
    return badRequest("null password")
  }

  if body.Name == "" || body.Mail == "" {
    return badRequest("null username/mail")
  }

  if reg.FindAllString(body.Mail, -1) == nil {
    return badRequest("wrong mail address")
  }
  if body.Name != "" {
    tx.Where("name=?", body.Name).First(&u)
    sel[0] = checkUser(u)
  }
  if body.Mail != "" {
    tx.Where("mail=?", body.Mail).First(&u)
    sel[1] = checkUser(u)
  }

  var resText string
  for i, v := range sel {
    if v {
      switch i {
      case 0:
        resText = "Name existed"
      case 1:
        resText = "Mail existed"
      }
      return forbidden(resText)
    }
  }

  CreateUser(&u, &salt, body)
  tx.Create(&u)
  //Create default sheet for user
  tx.Where("mail=?", body.Mail).First(&u)
  sheet.UserID = u.ID
  sheet.Name = DEFAULTSHEETNAME
  sheet.Privilege = "private"
  sheet.CreatedAt = time.Now().Unix()
  sheet.UpdatedAt = time.Now().Unix()
  tx.Create(&sheet)
  // transaction commit
  salt.UserID = u.ID
  tx.Create(&salt)
  tx.Commit()

  client, err := oss.New(ossConf.EndPoint, ossConf.AccessKeyId, ossConf.SecretKey)
  fmt.Println(ossConf.EndPoint + " " + ossConf.Bucket)

  if err != nil {
  }

  bucket, err := client.Bucket(ossConf.Bucket)
  if err != nil {
    fmt.Println(err)
  }

  err = bucket.PutObject(strconv.Itoa(u.ID) + "/", strings.NewReader(""))
  if err != nil {
    fmt.Println(err)
  }

  return ok("register success", u)

}

func checkUser(user models.User) bool {
  if user.ID == 0 {
    return false
  }
  return true

}

func CreateUser(u *models.User, salt *models.Salts, body *user.Account) {
  u.Mail = body.Mail
  u.Name = body.Name
  u.Phone = body.Phone
  u.CreatedAt = time.Now().Unix()
  u.UpdatedAt = time.Now().Unix()
  salt.Salt = utils.EncryptRandSequence(5)
  DecodeSalt, _ := utils.TokenDecode(salt.Salt)
  u.Password, _ = utils.PsdHandler(body.Password, []byte(DecodeSalt))
}