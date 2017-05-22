package sheet

import (
  "github.com/jinzhu/gorm"
  "MuShare/datatype/request/music"
  "net/http"
  "MuShare/manager/music/sheet"
  "MuShare/controllers/api/user/friend"
)

func ListSubscription(db *gorm.DB, body *music.Sheet, rw http.ResponseWriter) {
  sheet := sheet.Sheet{DB:db}
  res := sheet.ListSubscription(body)
  friend.Response(res, rw)
}