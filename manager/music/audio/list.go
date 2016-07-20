package audio

import (
	"MuShare/datatype/request/music"
	"MuShare/datatype"
	"MuShare/db/models"
	"strconv"
	"net/http"
)

const priFriend  = "friend"
const priPrivacy = "privacy"

func (this *Audio) ListAudio(body *music.Audio) datatype.Response{

	var res datatype.Response
	sheet := models.Sheet{}
	audios := []models.Audio{}
	friend := models.Friends{}
	tx := this.DB.Begin()

	if body.SheetID == 0{
		goto BadRequest
	}

	tx.Where("id = ?",
		strconv.Itoa(body.SheetID)).Find(&sheet)

	if sheet.ID == 0{
		goto Forbidden
	}

	if sheet.UserID == body.RequestFromID{
		goto OK
	}

	if sheet.Privilege == priPrivacy{
		if body.RequestFromID != sheet.UserID{
			goto Forbidden
		}
	}else if sheet.Privilege == priFriend {
		tx.Where("from_id = ? AND to_id = ?",
		strconv.Itoa(body.RequestFromID),strconv.Itoa(sheet.UserID)).First(&friend)
		if friend.ID == 0{
			goto Forbidden
		}
	}else{
		goto OK
	}

	OK:
	tx.Where("sheet_id = ?",
		strconv.Itoa(body.SheetID)).Find(&audios)
	tx.Commit()

	res = datatype.Response{
		Status:http.StatusOK,
		Body:audios,
	}
	return res

	BadRequest:
	res = datatype.Response{
    Status: http.StatusBadRequest,
  }
  return res

	Forbidden:
	res = datatype.Response{
    Status: http.StatusForbidden,
		ResponseText:"sheet doesn't exist or not enough privilege",
  }
  return res
}