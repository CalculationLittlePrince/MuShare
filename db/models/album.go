package models

type Album  struct {
  Model
  Name   string `gorm:"" json:"name"`
  Cover  string `gorm:"" json:"cover"`
  UserID uint   `gorm:"" json:"userId"`
  User   User   `gorm:"ForeignKey:UserID"`
}

func (Album) TableName() string{
  return "Albums"
}