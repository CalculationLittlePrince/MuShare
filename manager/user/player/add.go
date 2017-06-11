package player

import (
  "MuShare/datatype/request/user"
  "MuShare/datatype"
  "MuShare/db/models"
)

func (this *Player) AddAudioToPlayList(body *user.Player) datatype.Response {
  player := models.Player{}
  audio := models.Audio{}

  tx := this.DB.Begin()

  if (body.AudioID == 0) {
    return badRequest("")
  }

  audio.ID = body.AudioID
  if err := tx.Find(&audio).Error; err != nil {
    panic(err.Error())
  }
  if (audio.AudioUrl == "") {
    return forbidden("audio not exists")
  }

  player.AudioID = body.AudioID
  player.UserID = body.UserID
  if err := tx.Create(&player).Error; err != nil {
    panic(err.Error())
  }
  tx.Commit()

  return ok("", nil)
}