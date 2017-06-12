package audio

import (
  "github.com/jinzhu/gorm"
  "MuShare/datatype/request/music"
  "MuShare/datatype"
  "MuShare/db/models"
  "strconv"
)

const priFriend = "friend"
const priPrivate = "private"

func (this *Audio) ListAudio(body *music.Audio) datatype.Response {
  sheet := models.Sheet{}
  friend := models.Friends{}
  tx := this.DB.Begin()

  if body.SheetID == 0 {
    return badRequest("no sheet id")
  }

  tx.Preload("User").Where("id = ?",
    strconv.Itoa(body.SheetID)).Find(&sheet)

  if sheet.ID == 0 {
    return badRequest("sheet id didn't exist")
  }

  if sheet.UserID == body.UserID {
    sheet.Owner = true
    getAudios(tx, &sheet.Audios, body.SheetID)
    return ok("success", &sheet)
  }

  if sheet.Privilege == priPrivate {
    if body.UserID != sheet.UserID {
      return forbidden("no enough privi")
    }
  } else if sheet.Privilege == priFriend {
    tx.Where("from_id = ? AND to_id = ?",
      strconv.Itoa(body.UserID), strconv.Itoa(sheet.UserID)).First(&friend)
    if friend.ID == 0 {
      return forbidden("no enough privi")
    }
  }

  sheet.Owner = false
  subscribe := models.Subscribe{}
  tx.Where("user_id = ? and sheet_id = ?", body.UserID, body.SheetID).Find(&subscribe)
  if subscribe.ID != 0 {
    sheet.Subscribed = true
  } else {
    sheet.Subscribed = false
  }

  getAudios(tx, &sheet.Audios, body.SheetID)
  return ok("success", &sheet)
}

func getAudios(tx *gorm.DB, audios *[]models.Audio, id int) {
  tx.Preload("Artist").Where("sheet_id = ?",
    strconv.Itoa(id)).Find(audios)
  tx.Commit()
}