package upload

import (
  "github.com/jinzhu/gorm"
  "net/http"
  "encoding/json"
  "MuShare/datatype"
  "strconv"
  "MuShare/datatype/request/oss"
  "MuShare/manager/oss/upload"
)

func UploadAudio(db *gorm.DB, body *oss.OSSAudioCallback, rw http.ResponseWriter) {
  operation := upload.OSSOperation{DB:db}
  res := operation.UploadAudioCallback(body)
  Response(res, rw)
}

func UploadAvatar(db *gorm.DB, body *oss.OSSAvatarCallback, rw http.ResponseWriter) {
  operation := upload.OSSOperation{DB:db}
  res := operation.UploadAvatarCallback(body)
  Response(res, rw)
}

func Response(res datatype.Response, rw http.ResponseWriter) {
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

