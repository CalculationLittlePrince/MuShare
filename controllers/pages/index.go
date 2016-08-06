package pages

import (
	"net/http"
  "text/template"
  "os"
  "path"
)

func Index(rw http.ResponseWriter) {
  dir, _ := os.Getwd()
  t := template.Must(template.ParseFiles(path.Join(dir, "views", "index.html")))
  t.Execute(rw, nil)
}


