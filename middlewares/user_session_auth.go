package middlewares

import (
  "github.com/martini-contrib/sessions"
  "fmt"
  "net/http"
  "encoding/base64"
)

func UserSessionAuth(session sessions.Session, rw http.ResponseWriter, req *http.Request) {
  login := session.Get("login")
  if login != nil && login == true {
    fmt.Println("login")
  } else {
    fmt.Println("not login")
    http.Redirect(rw, req, "/?preview=" + base64.URLEncoding.EncodeToString([]byte(req.URL.Path)), http.StatusFound)
  }
}
