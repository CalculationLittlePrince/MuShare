package pages

import (
  "net/http"
  "text/template"
  "os"
  "path"
  "github.com/martini-contrib/sessions"
)

func App(r *http.Request, rw http.ResponseWriter, session sessions.Session) {
  dir, _ := os.Getwd()
  type Data struct {
    Host string
    Token string
  }
  token := session.Get("token").(string)
  data := Data{r.Host, token}
  t := template.Must(template.ParseFiles(path.Join(dir, "views", "app.html"),
    path.Join(dir, "views/header", "default_header.html"),
    path.Join(dir, "views/footer", "default_footer.html")))
  t.Execute(rw, data)
}


