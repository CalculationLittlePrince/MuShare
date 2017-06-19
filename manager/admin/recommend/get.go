package recommend

import (
  "MuShare/datatype"
  "MuShare/db/models"
)

func (this *Recommend) Get() datatype.Response {
  sheets := []models.Sheet{}
  tx := this.DB.Begin()
  if err := tx.Where("privilege = ?", "public").Limit(4).Order("updated_at desc").Find(&sheets).Error; err != nil {
    panic(err.Error())
  }
  tx.Commit()
  return ok("",  sheets)
}
