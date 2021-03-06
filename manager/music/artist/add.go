package artist

import (
  "MuShare/datatype/request/music"
  "MuShare/datatype"
  "MuShare/db/models"
)

func (this *Artist) AddArtist(body *music.Artist) datatype.Response {
  artist := models.Artist{}
  tx := this.DB.Begin()
  artist.Name = body.Name
  artist.UserID = body.UserID
  tx.Where("name = ? and user_id = ?", artist.Name, artist.UserID).Find(&artist)
  if artist.ID == 0 {
    if err := tx.Create(&artist).Error; err != nil {
      panic(err.Error())
    }
  }
  tx.Commit()
  return ok("", artist)
}


