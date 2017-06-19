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
  if err := tx.Where("name = ?", body.Name).Find(&artist).Error; err != nil {
    panic(err.Error())
  }

  if artist.ID == 0 {
    if err := tx.Create(&artist).Error; err != nil {
      panic(err.Error())
    }
  }
  tx.Commit()
  return ok("", artist)
}


