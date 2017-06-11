package player

import (
  "github.com/jinzhu/gorm"
  "net/http"
  "MuShare/datatype/request/user"
  "MuShare/datatype"
  "encoding/json"
  . "MuShare/manager/user/player"
)

func AddAudioToPlayList(db *gorm.DB, body *user.Player, rw http.ResponseWriter) {
  player := Player{DB:db}
  res := player.AddAudioToPlayList(body)
  Response(res, rw);
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
