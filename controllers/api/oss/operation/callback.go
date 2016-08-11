package operation

import (
  "github.com/jinzhu/gorm"
  "net/http"
  "encoding/json"
  "MuShare/datatype"
  "fmt"
)

func UploadCallback(db *gorm.DB, req http.Request, rw http.ResponseWriter){
  res := datatype.Response{
    Status: http.StatusOK,
  }
  fmt.Println(req.Body)
  fmt.Println(req.Form)
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

