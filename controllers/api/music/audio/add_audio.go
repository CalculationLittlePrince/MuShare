package audio

import (
  "github.com/jinzhu/gorm"
  "MuShare/datatype/request/music"
  "net/http"
  "MuShare/manager/music/audio"
  "MuShare/controllers/api/user/friend"
)

func AddAudio(db *gorm.DB, body *music.Audio, rw http.ResponseWriter) {
  music := audio.Audio{DB:db}
  res := music.AddAudio(body)
  friend.Response(res, rw)
}