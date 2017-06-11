package player

import (
  "github.com/jinzhu/gorm"
  "net/http"
  "MuShare/datatype/request/user"
  . "MuShare/manager/user/player"
)

func GetPlayList(db *gorm.DB, body *user.Player, rw http.ResponseWriter) {
  player := Player{DB:db}
  res := player.GetPlayList(body)
  Response(res, rw);
}
