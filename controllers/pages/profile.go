package pages

import (
  "net/http"
  "os"
  "path"
  "text/template"
  "github.com/martini-contrib/sessions"
)

func Profile(rw http.ResponseWriter, session sessions.Session) {
  type Data struct
  {
    Token string
  }
  var token string = session.Get("token").(string)
  dir, _ := os.Getwd()
  t := template.Must(template.ParseFiles(path.Join(dir, "views", "profile.html"),
    path.Join(dir, "views/header", "default_header.html"),
    path.Join(dir, "views/footer", "default_footer.html")))
  t.Execute(rw, Data{Token:token})
}