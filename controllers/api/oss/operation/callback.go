package operation

import (
  "github.com/jinzhu/gorm"
  "net/http"
  "encoding/json"
  "MuShare/datatype"
  "fmt"
  "strconv"
)

func UploadCallback(db *gorm.DB, req *http.Request, rw http.ResponseWriter){
  res := datatype.Response{
    Status: http.StatusOK,
  }
  b := make([]byte, 1024)
  req.Body.Read(b)
  fmt.Println(string(b))
  fmt.Println(req.Form)
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

