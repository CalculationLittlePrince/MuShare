package account

import (
  "net/http"
  "github.com/jinzhu/gorm"
  . "MuShare/manager/user/account"
  "github.com/go-martini/martini"
  "MuShare/datatype/request/user"
  "MuShare/conf"
)

func Register(db *gorm.DB, c martini.Context, body *user.Account, rw http.ResponseWriter, conf *conf.Conf) {
  if (db == nil) {
    panic("db is not exist")
  }
  account := Account{DB:db}
  res := account.Register(body, conf.OSS)

  Response(res, rw)
}


