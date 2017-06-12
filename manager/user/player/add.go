package player

import (
  "MuShare/datatype/request/user"
  "MuShare/datatype"
  "MuShare/db/models"
  "time"
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
  tx.Where("audio_id = ? and user_id = ?", body.AudioID, body.UserID).Find(&player)

  if player.ID == 0 {
    if err := tx.Create(&player).Error; err != nil {
      panic(err.Error())
    }
  } else {
    update := make(map[string]interface{})
    update["updated_at"] = time.Now()
    if err := tx.Model(&player).Updates(update).Error; err != nil {
      panic(err.Error())
    }
  }
  tx.Commit()

  return ok("", nil)
}