package artists

import (
  "MuShare/manager/music/artist"
  "github.com/jinzhu/gorm"
  "MuShare/datatype/request/music"
  "net/http"
  "MuShare/datatype"
  "encoding/json"
)

func GetArtist(db *gorm.DB, body *music.Artist, rw http.ResponseWriter)  {
  artist := artist.Artist{DB:db}
  res := artist.GetArtists(body)
  Response(res, rw)
}

func Response(res datatype.Response, rw http.ResponseWriter) {
  resJson, err := json.Marshal(res)
  if err != nil {
    panic(err.Error())
  }
  //send json response
  rw.Header().Set("Content-Type", "application/json; charset=utf-8")
  rw.WriteHeader(res.Status)
  rw.Write(resJson)
}
