package pages

import (
  "net/http"
  "os"
  "path"
  "text/template"
)

func Profile(rw http.ResponseWriter) {
  dir, _ := os.Getwd()
  t := template.Must(template.ParseFiles(path.Join(dir, "views", "profile.html")))
  t.Execute(rw, nil)
}