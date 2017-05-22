package sheet

import (
  "MuShare/datatype/request/music"
  "MuShare/datatype"
  "MuShare/db/models"
)

func (this *Sheet) ListSubscription(body *music.Sheet) datatype.Response {
  subscriptions := []models.Subscribe{}
  tx := this.DB.Begin()

  if body.UserID == 0 {
    return badRequest("")
  }

  if err := tx.Preload("Sheet").Where("user_id=?", body.UserID).Find(&subscriptions).Error; err != nil {
    panic(err.Error())
  }


  tx.Commit()

  res := make([]models.Sheet, 0)

  for _, item := range subscriptions {
    res = append(res, item.Sheet)
  }
  return ok("", res)
}
