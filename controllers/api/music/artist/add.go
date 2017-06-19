package artists

import (
  "MuShare/manager/music/artist"
  "github.com/jinzhu/gorm"
  "MuShare/datatype/request/music"
  "net/http"
)

func AddArtist(db *gorm.DB, body *music.Artist, rw http.ResponseWriter)  {
  artist := artist.Artist{DB:db}
  res := artist.AddArtist(body)
  Response(res, rw)
}
