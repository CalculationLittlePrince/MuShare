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
  "github.com/martini-contrib/sessions"
  "fmt"
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

func LoginSetToken(redis *redis.Client, user models.User, config *conf.Conf, session sessions.Session) {
  hSetKey := config.Redis.Prefix + "_token"
  mapKey := "user_" + strconv.Itoa(user.ID)
  redis.HSet(hSetKey, mapKey, string(user.Token)).Result()

  //set session
  session.Set("login", true)
  session.Set("token", user.Token)
  session.Set("userId", user.ID)
  fmt.Println(session)
}

func Response(res datatype.Response, rw http.ResponseWriter) {
  resJson, err := json.Marshal(res)
  if err != nil {
    panic(err.Error())
  }
  //send json response
  rw.Header().Set("Content-Type", "application/json; charset=utf-8")
  rw.WriteHeader(res.Status)
  rw.Write(resJson)
}
