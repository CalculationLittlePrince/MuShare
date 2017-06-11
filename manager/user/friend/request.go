package friend

import (
  "MuShare/datatype/request/user"
  "MuShare/datatype"
  "MuShare/db/models"
  "strconv"
)

const stateRequest = "request"
const stateAgree = "agree"

func (this *Friend) Get(body *user.Friend) datatype.Response {
  friends := []models.Friends{}
  tx := this.DB.Begin()

  if body.UserID == 0 {
    return badRequest("")
  }

  tx.Preload("User").Where("friend_id=? AND state=?",
    body.UserID, stateRequest).Find(&friends)

  tx.Commit()


  res := make([]models.User, 0)

  for _, item := range friends {
    res = append(res, item.User)
  }
  return ok("", res)
}

func (this *Friend) NewRequest(body *user.Friend) datatype.Response {
  toUser := models.User{}
  friend := models.Friends{}
  tx := this.DB.Begin()

  if body.UserID == 0 || body.FriendID == 0 {
    return badRequest("")
  }

  if body.UserID == body.FriendID {
    return forbidden("Can't Follow Self")
  }

  toUser.ID = body.FriendID

  tx.First(&toUser)

  if toUser.Mail == "" {
    return forbidden("Request User Doesn't Exist")
  }

  tx.Where("user_id=? AND friend_id=?", strconv.Itoa(body.UserID),
    strconv.Itoa(body.FriendID)).First(&friend)

  if !tx.NewRecord(&friend) && friend.State == stateRequest{
    return forbidden("Already Request")
  }

  if !tx.NewRecord(&friend) && friend.State == stateAgree {
    return forbidden("Already Friends")
  }

  friend.UserID = body.UserID
  friend.FriendID = body.FriendID
  friend.State = stateRequest

  tx.Create(&friend)

  tx.Commit()

  return ok("", nil)

}

func (this *Friend) AcceptRequest(body *user.Friend) datatype.Response {
  friend1 := models.Friends{}
  friend2 := models.Friends{}

  tx := this.DB.Begin()

  if (body.UserID == 0 || body.FriendID == 0) {
    return badRequest("")
  }

  tx.Where("user_id=? AND friend_id=?", strconv.Itoa(body.FriendID),
    strconv.Itoa(body.UserID)).First(&friend1)

  if tx.NewRecord(&friend1) {
    return forbidden("Request Doesn't Exist")
  }


  if !tx.NewRecord(&friend1) && friend1.State != stateRequest {
    return forbidden("Already Friends")
  }

  tx.Model(&friend1).Updates(map[string]string{"state": stateAgree})

  tx.Where("user_id=? AND friend_id=?", strconv.Itoa(body.UserID),
  strconv.Itoa(body.FriendID)).First(&friend2)

  if tx.NewRecord(&friend2) {
    friend2.UserID = body.UserID
    friend2.FriendID = body.FriendID
    friend2.State = stateAgree
    tx.Create(&friend2)
  } else {
    tx.Model(&friend2).Updates(map[string]string{"state": stateAgree})
  }

  if err := tx.Model(&friend1).Related(&friend1.User, "User").Error; err != nil {
    panic(err.Error())
  }

  if err := tx.Model(&friend2).Related(&friend2.User, "User").Error; err != nil {
    panic(err.Error())
  }

  if tx.NewRecord(&friend1.User) || tx.NewRecord(&friend2.User) {
    return forbidden("User Doesn't Exit")
  }

  tx.Commit()

  return ok("", friend1.User)
}
