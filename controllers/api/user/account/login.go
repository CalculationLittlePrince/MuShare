package account

import (
  "net/http"
  "github.com/jinzhu/gorm"
  "encoding/json"
  "github.com/go-martini/martini"
  "gopkg.in/redis.v3"
  "MuShare/db/models"
  "strconv"
  . "MuShare/manager/user/account"
  "MuShare/datatype/request/user"
  "MuShare/datatype"
  "MuShare/conf"
)

func Login(db *gorm.DB, c martini.Context, body *user.Account, rw http.ResponseWriter) {
  if (db == nil) {
    panic("DB Is Not Exist")
  }

  account := Account{DB:db}
  res := account.Login(body)

  if res.Status == http.StatusOK {
    c.Map(res.Body)
    c.Next()
  }

  Response(res, rw)
}

func LoginSetToken(redis *redis.Client, user models.User, config *conf.Conf) {
  hSetKey := config.Redis.Prefix + "_token"
  mapKey := "user_" + strconv.Itoa(user.ID)
  redis.HSet(hSetKey, mapKey, string(user.Token)).Result()
}

func Response(res datatype.Response, rw http.ResponseWriter) {
  resJson, err := json.Marshal(res)
  if err != nil {
    panic(err.Error())
  }
  //send json response
  rw.Header().Set("content-Type", "application/json; charset=utf-8")
  rw.WriteHeader(res.Status)
  rw.Write(resJson)
}
