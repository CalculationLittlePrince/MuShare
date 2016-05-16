package models

type User struct {
  Model
  Name        string      `gorm:"" json:"name"`
  Mail        string      `gorm:"" json:"mail"`
  Phone       string      `gorm:"" json:"phone"`
  Avatar      string      `gorm:"" json:"avatar"`
  ScreenName  string      `gorm:"" json:"screenName"`
  Gender      int         `gorm:"" json:"gender"`
  Birth       int64       `gorm:"" json:"birth"`
  Description string      `gorm:"" json:"description"`
  Password    string      `gorm:"" json:"-"`
  LastLoginAt int64       `gorm:"" json:"-"`
  Friends     []Friends   `gorm:"ForeignKey:UserID" json:"friends,omitempty"`
  Albums      []Album     `gorm:"ForeignKey:UserID" json:"albums,omitempty"`
  Sheets      []Sheet     `gorm:"ForeignKey:UserID" json:"sheets,omitempty"`
  Subscribe   []Subscribe `gorm:"ForeignKey:UserID" json:"subscribe,omitempty"`
  Token       string      `sql:"-" json:"token,omitempty"`
}

func (User) TableName() string {
  return "users"
}