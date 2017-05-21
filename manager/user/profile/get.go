package profile

import (
  "MuShare/datatype"
  "MuShare/datatype/request/user"
  "MuShare/db/models"
)

func (this *Profile) GetProfile(body *user.Profile) datatype.Response {
  tx := this.DB.Begin()
  user := models.User{}

  if body.FriendID == 0 {
    body.FriendID = body.UserID
  }

  tx.Where("id=?", body.FriendID).Find(&user)


  if tx.NewRecord(&user) {
    return forbidden("User Doesn't Exsit")
  }

  tx.Commit()

  return ok("", user)
}
