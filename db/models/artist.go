package models

type Artist struct {
  Model
  name      string     `gorm:""`
  privilege string     `gorm:""`
  UserID    uint       `gorm:""`
  User      User       `gorm:"ForeignKey:UserID"`
  Music     []Music    `gorm:"ForeignKey:ArtistID"`
}

func (Artist) TableName() string {
  return "Artists"
}
