package friend

import (
  "net/http"
  "github.com/jinzhu/gorm"
  . "MuShare/manager/user/friend"
  "MuShare/datatype/request/user"
)

func GetFriendsList(db *gorm.DB, body *user.Friend, rw http.ResponseWriter){
  friend := Friend{DB:db}
  res := friend.List(body)
  Response(res, rw)
}
