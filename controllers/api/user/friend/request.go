package friend

import (
  "net/http"
  "github.com/jinzhu/gorm"
  "MuShare/datatype/request/user"
  "encoding/json"
  . "MuShare/manager/user/friend"
  "MuShare/datatype"
)

func GetRequests(db *gorm.DB, body *user.Friend, rw http.ResponseWriter) {

  friend := Friend{DB:db}
  res := friend.Get(body)
  Response(res, rw)

}

func NewRequest(db *gorm.DB, body *user.Friend, rw http.ResponseWriter) {

  friend := Friend{DB:db}
  res := friend.NewRequest(body)
  Response(res, rw)

}

func AcceptRequest(db *gorm.DB, body *user.Friend, rw http.ResponseWriter) {

  friend := Friend{DB:db}
  res := friend.AcceptRequest(body)
  Response(res, rw)

}

func Response(res datatype.Response, rw http.ResponseWriter){
  resJson, err := json.Marshal(res)
  if err != nil {
    panic(err.Error())
  }
  //send json response
  rw.Header().Set("Content-Type", "application/json; charset=utf-8")
  rw.WriteHeader(res.Status)
  rw.Write(resJson)
}

