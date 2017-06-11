package models

import (
  "github.com/jinzhu/gorm"
  "time"
)

type Player struct {
  Model
  UserID  int     `gorm:"" json:"userId"`
  AudioID int     `gorm:"" json:"audioId"`
  Audio   Audio   `gorm:"ForeignKey:AudioID" json:"audio,omitempty"`
}

func (Player) TableName() string {
  return "player"
}

func (friend *Player) BeforeCreate(scope *gorm.Scope) (err error) {
  scope.SetColumn("created_at", time.Now().Unix())
  scope.SetColumn("updated_at", time.Now().Unix())
  return
}

func (friend *Player) BeforeUpdate(scope *gorm.Scope) (err error) {
  scope.SetColumn("updated_at", time.Now().Unix())
  return
}