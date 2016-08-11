package operation

import (
	"MuShare/datatype"
	"MuShare/datatype/request/oss"
	"MuShare/db/models"
)

func (this *OSSOperation) UploadCallback(body *oss.OSSCallback) datatype.Response{
	tx := this.DB.Begin()
	audio := models.Audio{}
	if body.Object == "" || body.AudioID == ""{
		return badRequest("")
	}

	tx.Where("id = ?", body.AudioID).First(&audio)
	if audio.ID == 0 {
		return badRequest("")
	}

	if body.MimeType == "pic"{
		audio.ImageUrl = body.Object
	}else if body.MimeType == "music" {
		audio.AudioUrl = body.Object
	}else {
		return badRequest("")
	}
	tx.Save(&audio)
	tx.Commit()
	return ok("",nil)
}
