package models

type Subscribe struct {
  Model
  SheetID int  `gorm:"" json:"sheetId"`
  UserID  int  `gorm:"" json:"userId"`
  Sheet   Sheet `gorm:"ForeignKey:SheetID" json:"sheet,omitempty"`
}

func (Subscribe) TableName() string {
  return "subscribe"
}