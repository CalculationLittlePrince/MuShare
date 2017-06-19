package hot

import (
  "MuShare/datatype"
  "net/http"
  "encoding/json"
  "github.com/jinzhu/gorm"
  "MuShare/manager/admin/hot"
)

func Get(db *gorm.DB, rw http.ResponseWriter) {
  hot := hot.Hot{DB:db}
  res := hot.Get()
  Response(res, rw)
}

func Response(res datatype.Response, rw http.ResponseWriter) {
  resJson, err := json.Marshal(res)
  if err != nil {
    panic(err.Error())
  }
  //send json response
  rw.Header().Set("Content-Type", "application/json; charset=utf-8")
  rw.WriteHeader(res.Status)
  rw.Write(resJson)
}