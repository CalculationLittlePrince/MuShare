package models

type Sheet struct {
  Model
  Name      string   `gorm:"" json:"name"`
  Privilege string   `gorm:"" json:"privilege"`
  UserID    int      `gorm:"" json:"userId"`
  User      User     `gorm:"ForeignKey:UserID" json:"user,omitempty"`
  Audios    []Audio  `gorm:"ForeignKey:SheetID" json:"audio,omitempty"`
}

func (Sheet) TableName() string {
  return "sheets"
}