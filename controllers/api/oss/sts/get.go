package sts

import (
  "github.com/jinzhu/gorm"
  "net/http"
  . "MuShare/manager/oss/sts"
  "encoding/json"
  "MuShare/datatype"
  "MuShare/conf"
  "MuShare/datatype/request/oss"
)

func GetSTS(db *gorm.DB, body *oss.OSS, conf *conf.Conf, rw http.ResponseWriter){
  oss := OSS{DB:db}
  res := oss.GetSTS(body, conf.OSS)
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

