package audio

import (
  "MuShare/datatype/request/music"
  "MuShare/datatype"
  "MuShare/db/models"
  "time"
)

func (this *Audio) AddEmptyAudio(body *music.Audio) datatype.Response {
  audio := models.Audio{}
  tx := this.DB.Begin()
  sheet := models.Sheet{}

  if body.SheetID == 0 || body.Name == "" {
    return badRequest("")
  }

  tx.Where("id = ?", body.SheetID).First(&sheet)
  if sheet.ID == 0 {
    return forbidden("No sheet")
  }

  if sheet.UserID != body.UserID {
    return forbidden("auth fail")
  }

  createEmptyMusic(body, &audio)
  tx.Create(&audio)
  tx.Commit()

  return ok("success", audio)
}

func createEmptyMusic(body *music.Audio, audio *models.Audio) {
  audio.Name = body.Name
  audio.SheetID = body.SheetID
  audio.CreatedAt = time.Now().Unix()
  audio.UpdatedAt = time.Now().Unix()
}