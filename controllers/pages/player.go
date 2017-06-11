package pages

import (
  "path"
  "os"
  "net/http"
  "text/template"
  "github.com/martini-contrib/sessions"
)

func Player(rw http.ResponseWriter, session sessions.Session) {
  dir, _ := os.Getwd()
  type Data struct {
    Token string
  }
  token := session.Get("token").(string)
  data := Data{token}
  t := template.Must(template.ParseFiles(path.Join(dir, "views", "player.html")))
  t.Execute(rw, data)
}