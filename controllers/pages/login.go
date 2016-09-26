package pages

import (
  "net/http"
  "os"
  "text/template"
  "path"
  "encoding/base64"
)

func Login(rw http.ResponseWriter, req *http.Request) {
  type Data struct 
  {
    Preview string
    
  }
  var preview string = "";
  encodePreview := req.URL.Query().Get("preview")
  if encodePreview != "" {
    decodePreview, err := base64.URLEncoding.DecodeString(encodePreview)
    preview = string(decodePreview)
    if err != nil {
      panic(err.Error())
    }
  } else {
    preview = "/"
  }
  data := Data{
    Preview:preview,
  }
  dir, _ := os.Getwd()
  t := template.Must(template.ParseFiles(path.Join(dir, "views", "login.html")))
  t.Execute(rw, data)
}
