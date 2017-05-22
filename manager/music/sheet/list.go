package sheet

import (
  "MuShare/datatype/request/music"
  "MuShare/datatype"
  "MuShare/db/models"
  "strconv"
)

const priFriend = "friend"
const priPrivate = "private"
const priPublic = "public"
const stateAgree = "agree"

func (this *Sheet) ListSheet(body *music.Sheet) datatype.Response {
  sheets := []models.Sheet{}

  user := models.User{}
  friend := models.Friends{}
  tx := this.DB.Begin()

  if body.UserID == 0 {
    return badRequest("")
  }

  if (body.ToID == 0) {
    body.ToID = body.UserID
  }

  tx.Where("id = ?",
    strconv.Itoa(body.UserID)).Find(&user)
  if user.ID == 0 {
    return forbidden("no such user")
  }
  tx.Where("id = ?",
    strconv.Itoa(body.ToID)).Find(&user)
  if user.ID == 0 {
    return forbidden("no such user")
  }

  if body.UserID == body.ToID {
    tx.Preload("User").Where("user_id = ?",
      strconv.Itoa(body.UserID)).Find(&sheets)
  } else {
    //detect whether friend or not
    tx.Where("user_id = ? AND friend_id = ? AND state = ?",
      strconv.Itoa(body.UserID), strconv.Itoa(body.ToID), stateAgree).First(&friend)

    if friend.ID == 0 {
      tx.Where("user_id = ? AND privilege = ?",
        strconv.Itoa(body.ToID), priPublic).Find(&sheets)

    } else {
      tx.Where("user_id = ? AND privilege in (?)",
        strconv.Itoa(body.ToID), []string{priPublic, priFriend}).Find(&sheets)
    }
  }
  tx.Commit()

  return ok("", sheets)
}

