package pages

import (
  "net/http"
  "text/template"
  "os"
  "path"
)

func App(r *http.Request, rw http.ResponseWriter) {
  dir, _ := os.Getwd()
  type Data struct {
    Host string
  }
  data := Data{r.Host}
  t := template.Must(template.ParseFiles(path.Join(dir, "views", "app.html"),
    path.Join(dir, "views/header", "default_header.html"),
    path.Join(dir, "views/footer", "default_footer.html")))
  t.Execute(rw, data)
}


