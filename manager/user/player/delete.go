package player

import (
  "MuShare/datatype/request/user"
  "MuShare/datatype"
  "MuShare/db/models"
)

func (this *Player) DeleteAudioFromPlayList(body *user.Player) datatype.Response {
  tx := this.DB.Begin()

  if (body.AudioID == 0) {
    return badRequest("")
  }

  if err := tx.Where("audio_id = ? and user_id = ?", body.AudioID, body.UserID).Delete(&models.Player{}).Error; err != nil {
    panic(err.Error());
  }
  tx.Commit()

  return ok("", nil)
}
