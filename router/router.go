package router

import (
  "github.com/go-martini/martini"
  "MuShare/controllers/pages"
  . "MuShare/middlewares"
  "MuShare/controllers/api/user/account"
  "MuShare/controllers/api/user/friend"
  "MuShare/datatype/request/user"
  "reflect"
  "MuShare/controllers/api/music/sheet"
  "MuShare/datatype/request/music"
  "MuShare/controllers/api/music/audio"
)

func Include(m *martini.ClassicMartini) {
  includePages(m)
  includeUserApi(m)
}

func includePages(m *martini.ClassicMartini) {
  m.Get("/", pages.Index)
  m.Get("/test", pages.TestPage)
}

func includeUserApi(m *martini.ClassicMartini) {
  m.Group("/api/user/account", func(r martini.Router) {
    r.Post("/login", account.Login, account.LoginSetToken)
    r.Post("/register", account.Register)
  }, RetrieveBody(reflect.TypeOf(user.Account{})))

  m.Group("/api/user/friend", func(r martini.Router) {
    r.Get("/list", friend.GetFriendsList)
    r.Get("/request", friend.GetRequests)
    r.Post("/request", friend.NewRequest)
    r.Put("/request", friend.AcceptRequest)
    r.Delete("/delete", friend.UnFollow)
  }, RetrieveBody(reflect.TypeOf(user.Friend{})), TokenAuth)

  m.Group("/api/music/sheet", func(r martini.Router) {
    r.Post("/create", sheet.Create)
    r.Delete("/delete",sheet.Delete)
    r.Get("/list",sheet.ListSheet)
    r.Put("/update",sheet.Update)
  }, RetrieveBody(reflect.TypeOf(music.Sheet{})), TokenAuth)

  m.Group("/api/music/audio", func(r martini.Router) {
    r.Post("/add", audio.AddAudio)
    r.Delete("/delete", audio.DeleteAudio)
    r.Get("/list", audio.GetAudiosList)
  }, RetrieveBody(reflect.TypeOf(music.Audio{})), TokenAuth)

  m.Group("/api/user/profile", func(r martini.Router) {
    r.Get("/:id")
    r.Put("update")
  })
}