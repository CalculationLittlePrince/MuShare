package models

type Audio struct {
  Model
  Name     string  `gorm:"" json:"name"`
  Duration int     `gorm:"" json:"duration"`
  AudioUrl string  `gorm:"" json:"audioUrl"`
  ImageUrl string  `gorm:"" json:"imageUrl"`
  ArtistID int     `gorm:"" json:"artistId"`
  SheetID  int     `gorm:"" json:"sheetId"`
  Artist   Artist  `gorm:"ForeignKey:ArtistID" json:"artist,omitempty"`
  Sheet    Sheet   `gorm:"ForeignKey:SheetID" json:"sheet,omitempty"`
}

func (Audio) TableName() string {
  return "audio"
}
