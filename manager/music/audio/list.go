package audio

import (
  "github.com/jinzhu/gorm"
  "MuShare/datatype/request/music"
  "MuShare/datatype"
  "MuShare/db/models"
  "strconv"
)

const priFriend = "friend"
const priPrivacy = "privacy"

func (this *Audio) ListAudio(body *music.Audio) datatype.Response{
	sheet := models.Sheet{}
	audios := []models.Audio{}
	friend := models.Friends{}
	tx := this.DB.Begin()

	if body.SheetID == 0{
		return badRequest("no sheet id")
	}

	tx.Where("id = ?",
		strconv.Itoa(body.SheetID)).Find(&sheet)

	if sheet.ID == 0{
		return badRequest("sheet id didn't exist")
	}

	if sheet.UserID == body.UserID{
		return ok("success", getAudios(tx, &audios, body.SheetID))
	}

	if sheet.Privilege == priPrivacy{
		if body.UserID != sheet.UserID{
			return forbidden("no enough privi")
		}
	}else if sheet.Privilege == priFriend {
		tx.Where("from_id = ? AND to_id = ?",
		strconv.Itoa(body.UserID),strconv.Itoa(sheet.UserID)).First(&friend)
		if friend.ID == 0{
			return forbidden("not friend")
		}
	}

	return ok("success", getAudios(tx, &audios, body.SheetID))

}

func getAudios(tx *gorm.DB, audios *[]models.Audio, id int) *[]models.Audio {
  tx.Where("sheet_id = ?",
    strconv.Itoa(id)).Find(&audios)
  tx.Commit()
  return audios
}