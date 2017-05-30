package profile

import (
  "MuShare/datatype"
  "MuShare/datatype/request/user"
  "MuShare/db/models"
  "fmt"
)

func (this *Profile) UpdateProfile(body *user.Profile) datatype.Response {
  tx := this.DB.Begin()
  user := models.User{}
  user.ID = body.UserID
  update := make(map[string]interface{})


  if body.Name == "" {
    badRequest("Name Can't Be Null")
  }

  if body.Name != nil {
    update["name"] = body.Name
  }

  if body.Avatar != nil {
    update["avatar"] = body.Avatar
  }

  if body.Gender != nil {
    if gender[body.Gender.(string)] != "" {
      update["gender"] = gender[body.Gender.(string)]
    }
  }

  if body.Birth != nil {
    update["birth"] = body.Birth
  }

  if body.Phone != nil {
    update["phone"] = body.Phone
  }

  if body.Description != nil {
    update["description"] = body.Description
  }

  fmt.Println(update["gender"])
  err := tx.Model(&user).Updates(update).Error

  if err != nil {
    panic(err.Error())
  }

  tx.Commit()

  return ok("", nil)
}
