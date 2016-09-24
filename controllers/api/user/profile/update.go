package profile

import (
  "net/http"
  "github.com/jinzhu/gorm"
  "MuShare/datatype/request/user"
  ."MuShare/manager/user/profile"
  "encoding/json"
  "MuShare/datatype"
)

func UpdateProfile(db *gorm.DB, body *user.Profile, rw http.ResponseWriter) {
  profile := Profile{DB:db}
  res := profile.UpdateProfile(body)
  Response(res, rw)
}

func Response(res datatype.Response, rw http.ResponseWriter){
  resJson, err := json.Marshal(res)
  if err != nil {
    panic(err.Error())
  }
  //send json response
  rw.Header().Set("content-Type", "application/json; charset=utf-8")
  rw.WriteHeader(res.Status)
  rw.Write(resJson)
}
