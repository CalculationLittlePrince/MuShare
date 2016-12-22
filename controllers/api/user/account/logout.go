package account

import (
  "github.com/go-martini/martini"
  "net/http"
  "github.com/martini-contrib/sessions"
  "MuShare/datatype"
  "MuShare/conf"
  "gopkg.in/redis.v3"
  "strconv"
  "fmt"
)

func Logout(redis *redis.Client, c martini.Context, rw http.ResponseWriter,
config *conf.Conf, session sessions.Session) {

  fmt.Println(session.Get("login"))
  session.Set("login", false)
  session.Set("token", "")

  if session.Get("userId") != nil {
    userId := session.Get("userId")
    fmt.Println(userId)
    hSetKey := config.Redis.Prefix + "_token"
    mapKey := "user_" + strconv.Itoa(userId.(int))
    redis.HDel(hSetKey, mapKey).Result()
  }

  res := datatype.Response{
    Status: http.StatusOK,
  }

  Response(res, rw)
}
