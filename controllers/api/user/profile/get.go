package profile

import (
  "net/http"
  "github.com/jinzhu/gorm"
  "MuShare/datatype/request/user"
  . "MuShare/manager/user/profile"
)

func GetProfile(db *gorm.DB, body *user.Profile, rw http.ResponseWriter){
  profile := Profile{DB:db}
  res := profile.GetProfile(body)
  Response(res, rw)
}
