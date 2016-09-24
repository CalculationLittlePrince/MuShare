package middlewares

import (
  "net/http"
  "gopkg.in/redis.v3"
  "MuShare/utils"
  "reflect"
  "github.com/go-martini/martini"
  "MuShare/conf"
)

const UserIdField = "UserID"

func TokenAuth(redis *redis.Client, c martini.Context, typ reflect.Type,
rw http.ResponseWriter, req *http.Request, config *conf.Conf) {

  auth, userId := utils.TokenAuth(req.Header.Get("Authorization"), redis, config)

  if !auth {
    unauthorized("User Auth Failed", rw)
    return
  }

  if !setUserId(c, typ, userId) {
    unauthorized("User Auth Failed", rw)
  }
}

func setUserId(c martini.Context, typ reflect.Type, userId string) bool {
  body := c.Get(typ)
  e := body.Elem()
  if e.Kind() == reflect.Struct {
    value := e.FieldByName(UserIdField)
    if value.IsValid() && value.CanSet() {
      return setInt(value, userId)
    }
  }
  return false
}
