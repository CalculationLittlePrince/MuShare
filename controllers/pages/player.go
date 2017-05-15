package pages

import (
  "path"
  "os"
  "net/http"
  "text/template"
)

func Player(rw http.ResponseWriter) {
  dir, _ := os.Getwd()
  t := template.Must(template.ParseFiles(path.Join(dir, "views", "player.html")))
  t.Execute(rw, nil)
}