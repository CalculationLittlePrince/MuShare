package artist

import (
  "MuShare/datatype/request/music"
  "MuShare/db/models"
  "MuShare/datatype"
)

func (this *Artist) GetArtists(body *music.Artist) datatype.Response {
  artists := []models.Artist{}
  tx := this.DB.Begin()
  if err := tx.Where("user_id = ?", body.UserID).Find(&artists).Error; err != nil {
    panic(err.Error())
  }
  tx.Commit()
  return ok("",  artists)
}
