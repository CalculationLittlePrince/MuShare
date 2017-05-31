package models

import (
  "github.com/jinzhu/gorm"
  "MuShare/conf"
)

type Model struct {
  ID        int   `gorm:"" json:"id"`
  CreatedAt int64 `gorm:"" json:"-"`
  UpdatedAt int64 `gorm:"" json:"update_at"`
}

func New(mysql conf.Mysql) *gorm.DB {
  db, err := gorm.Open("mysql",
    mysql.User + ":" + mysql.Password + "@/" + mysql.Database)
  if err != nil {
    panic(err.Error())
  }
  return db
}
