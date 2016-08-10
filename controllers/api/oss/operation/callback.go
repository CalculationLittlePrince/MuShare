package operation

import (
  "github.com/jinzhu/gorm"
  "net/http"
  "encoding/json"
  "MuShare/datatype"
  "MuShare/datatype/request/oss"
	"MuShare/manager/oss/operation"
)

func UploadCallback(db *gorm.DB, body *oss.Callback, rw http.ResponseWriter){
  oss := operation.OSSOperation{DB:db}
  res := oss.UploadCallback(body)
  Response(res, rw)
}

func Response(res datatype.Response, rw http.ResponseWriter){
  resJson, err := json.Marshal(res)
  if err != nil {
    panic(err.Error())
  }
  //send json response
  rw.Header().Set("content-Type", "application/json; charset=utf-8")
  rw.WriteHeader(res.Status)
  rw.Write(resJson)
}

