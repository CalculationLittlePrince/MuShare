package sheet

import (
  "MuShare/datatype/request/music"
  "MuShare/datatype"
  "MuShare/db/models"
  "time"
  "strconv"
)

func (this *Sheet) Create(body *music.Sheet) datatype.Response {
  sheet := models.Sheet{}
  tx := this.DB.Begin()
  u := models.User{}

  if body.UserID == 0 {
    return badRequest("0 from id")
  }

  tx.Where("id = ?", strconv.Itoa(body.UserID)).First(&u)

  if u.ID == 0 {
    return badRequest("no such from id")
  }
  //One user cannot create sheet with same name
  tx.Where("user_id = ? AND name = ?", strconv.Itoa(u.ID), body.Name).First(&sheet)
  if sheet.ID != 0 {
    return forbidden("existed sheet")
  }

  CreateSheet(body, &sheet)
  tx.Create(&sheet)
  tx.Model(&sheet).Related(&sheet.User, "User")
  tx.Commit()
  return ok("", sheet)
}

func CreateSheet(body *music.Sheet, sheet *models.Sheet) {
  sheet.Name = body.Name
  sheet.Privilege = body.Privilege
  sheet.UserID = body.UserID
  sheet.Cover = body.Cover
  sheet.CreatedAt = time.Now().Unix()
  sheet.UpdatedAt = time.Now().Unix()
}