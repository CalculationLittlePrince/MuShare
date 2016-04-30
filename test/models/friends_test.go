package test

import (
  "testing"
  "MuShare/db/models"
)

func TestFriendsInsert(t *testing.T) {
  friends := models.Friends{
    ID:1,
    FromID:1,
    ToID:14,
  }
  DB.Create(&friends)
}