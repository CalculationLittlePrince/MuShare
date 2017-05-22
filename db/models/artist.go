package models

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
