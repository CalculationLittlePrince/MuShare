package models

import (
  "github.com/jinzhu/gorm"
  "time"
)

type Artist struct {
  Model
  Name   string     `gorm:"" json:"name"`
  UserID int        `gorm:"" json:"userId"`
  User   User       `gorm:"ForeignKey:UserID" json:"user,omitempty"`
  Audio  []Audio    `gorm:"ForeignKey:ArtistID" json:"audio,omitempty"`
}

func (Artist) TableName() string {
  return "artists"
}

func (artist *Artist) BeforeCreate(scope *gorm.Scope) (err error) {
  scope.SetColumn("created_at", time.Now().Unix())
  scope.SetColumn("updated_at", time.Now().Unix())
  return
}

func (artist *Artist) BeforeUpdate(scope *gorm.Scope) (err error) {
  scope.SetColumn("updated_at", time.Now().Unix())
  return
}