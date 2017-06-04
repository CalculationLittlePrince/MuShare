package audio

import (
  "MuShare/datatype/request/music"
  "MuShare/datatype"
  "MuShare/db/models"
  "time"
  "fmt"
)

func (this *Audio) AddAudio(body *music.Audio) datatype.Response {
  audio := models.Audio{}
  tx := this.DB.Begin()
  sheet := models.Sheet{}

  fmt.Println(body)
  if body.SheetID == 0 ||
    body.Name == "" ||
    body.ArtistID == 0 ||
    body.AudioUrl == "" ||
    body.Duration == 0 {
    return badRequest("")
  }

  tx.Where("id = ?", body.SheetID).First(&sheet)
  if sheet.ID == 0 {
    return forbidden("No sheet")
  }

  if sheet.UserID != body.UserID {
    return forbidden("auth fail")
  }

  createAudio(body, &audio)
  tx.Create(&audio)
  tx.Commit()

  return ok("success", audio)
}

func createAudio(body *music.Audio, audio *models.Audio) {
  audio.Name = body.Name
  audio.SheetID = body.SheetID
  audio.ArtistID = body.ArtistID
  audio.AudioUrl = body.AudioUrl
  audio.Duration = body.Duration
  audio.CreatedAt = time.Now().Unix()
  audio.UpdatedAt = time.Now().Unix()
}