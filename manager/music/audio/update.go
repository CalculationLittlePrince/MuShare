package audio

import (
	"MuShare/datatype/request/music"
  "MuShare/datatype"
  "MuShare/db/models"
  "strconv"
)

func (this *Audio) Update(body *music.Audio) datatype.Response{
	audio := models.Audio{}
	sheet := models.Sheet{}
	tx := this.DB.Begin()
	u := models.User{}

	if body.UserID == 0{
		 return badRequest("")
	}
	tx.Where("id = ?", strconv.Itoa(body.UserID)).First(&u)

  if u.ID == 0 {
    return forbidden("no such user")
  }

	tx.Where("audio_url = ?", body.AudioUrl).First(&audio)
	if audio.ID == 0{
		return forbidden("no such audio")
	}

	tx.Where("id = ? AND user_id = ?",strconv.Itoa(audio.SheetID),strconv.Itoa(u.ID)).First(&sheet)
	if sheet.ID == 0{
		return forbidden("not this user's audio")
	}
	if body.Name != ""{
		audio.Name = body.Name
	}

	if body.SheetID != 0{
		sheet.ID = 0
		tx.Where("id = ? AND user_id = ?",strconv.Itoa(body.SheetID),strconv.Itoa(u.ID)).First(&sheet)
		if sheet.ID == 0{
			return forbidden("the terminal sheet doesn't exist or belong to the request user!")

		}
		audio.SheetID = body.SheetID
	}
	tx.Save(&audio)
	tx.Commit()

	return ok("modify success", audio)
}