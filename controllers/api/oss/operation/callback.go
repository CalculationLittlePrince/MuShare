package operation

import (
  "github.com/jinzhu/gorm"
  "net/http"
  "encoding/json"
  "MuShare/datatype"
  "strconv"
  "MuShare/datatype/request/oss"
  "MuShare/manager/oss/operation"
)

func UploadCallback(db *gorm.DB, body *oss.OSSCallback, rw http.ResponseWriter){
  operation := operation.OSSOperation{DB:db}
  res := operation.UploadCallback(body)
  Response(res, rw)
}

func Response(res datatype.Response, rw http.ResponseWriter){
  resJson, err := json.Marshal(res)
  if err != nil {
    panic(err.Error())
  }
  //send json response
  rw.Header().Set("Content-Type", "application/json; charset=utf-8")
  rw.Header().Set("Content-Length", strconv.Itoa(len(string(resJson))))
  rw.WriteHeader(res.Status)
  rw.Write(resJson)
}

