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
const stateRequest = "request"

func (this *Sheet) ListSheet(body *music.Sheet) datatype.Response {
  user := models.User{}
  toUser := models.User{}
  friend1 := models.Friends{}
  friend2 := models.Friends{}
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
    strconv.Itoa(body.ToID)).Find(&toUser)
  if toUser.ID == 0 {
    return forbidden("no such user")
  }

  if body.UserID == body.ToID {
    // self
    toUser.Friend = 1;
    tx.Preload("User").Where("user_id = ?",
      strconv.Itoa(body.UserID)).Find(&toUser.Sheets)
  } else {
    //detect whether friend or not
    tx.Where("user_id = ? AND friend_id = ? AND state = ?",
      strconv.Itoa(body.UserID), strconv.Itoa(body.ToID), stateAgree).First(&friend1)

    tx.Where("user_id = ? AND friend_id = ? AND state = ?",
      strconv.Itoa(body.UserID), strconv.Itoa(body.ToID), stateRequest).First(&friend2)

    if friend1.ID == 0 {
      if friend2.ID == 0 {
        // not friend
        toUser.Friend = 2;
      } else {
        // friend requesting
        toUser.Friend = 3;
      }
      tx.Where("user_id = ? AND privilege = ?",
        strconv.Itoa(body.ToID), priPublic).Find(&toUser.Sheets)

    } else {
      // friend
      toUser.Friend = 4;
      tx.Where("user_id = ? AND privilege in (?)",
        strconv.Itoa(body.ToID), []string{priPublic, priFriend}).Find(&toUser.Sheets)
    }
  }
  tx.Commit()

  return ok("", toUser)
}

