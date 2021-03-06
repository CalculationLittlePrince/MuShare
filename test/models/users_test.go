package test

import (
  "testing"
  "MuShare/db/models"
  "time"
  "fmt"
)

func TestUserInsert(t *testing.T) {
  user := models.User{
    Name:"liyifan",
    Mail:"geeklyf@hotmail.com",
    Phone:"080-6761-1034",
    Password:"w19920610",
  }
  user.CreatedAt = time.Now().Unix()
  user.UpdatedAt = time.Now().Unix()
  DB.Create(&user)
}

func TestUserQuery(t *testing.T) {
  user := models.User{Name:"shuai"}
  DB.First(&user)
  DB.Model(&user).Related(&user.Friends, "Friends")
  DB.Preload("Friend").Where("user_id=?", user.ID).Find(&user.Friends)
  fmt.Println(user)
}


