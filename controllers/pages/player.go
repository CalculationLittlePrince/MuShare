package pages

import (
  "path"
  "os"
  "net/http"
  "text/template"
)

func Player(rw http.ResponseWriter) {
  dir, _ := os.Getwd()
  t := template.Must(template.ParseFiles(path.Join(dir, "views", "player.html"),
    path.Join(dir, "views/header", "default_header.html"),
    path.Join(dir, "views/footer", "default_footer.html")))
  t.Execute(rw, nil)
}