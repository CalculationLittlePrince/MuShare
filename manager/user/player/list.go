package player

import (
  "MuShare/datatype/request/user"
  "MuShare/datatype"
  "MuShare/db/models"
)

func (this *Player) GetPlayList(body *user.Player) datatype.Response {
  players := []models.Player{}

  tx := this.DB.Begin()
  if err := tx.Preload("Audio").Where("user_id = ?", body.UserID).Order("created_at desc").Find(&players).Error; err != nil {
    panic(err.Error())
  }

  res := make([]models.Audio, 0)

  for index, _ := range players {
    tx.Model(&players[index].Audio).Related(&players[index].Audio.Artist);
    tx.Model(&players[index].Audio).Related(&players[index].Audio.Sheet);
    res = append(res, players[index].Audio)
  }

  tx.Commit()

  return ok("", res)
}
