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
  "MuShare/controllers/api/user/profile"
  "MuShare/controllers/api/oss/upload"
  "MuShare/controllers/api/user/search"
  "MuShare/controllers/api/oss/sts"
  "MuShare/datatype/request/oss"
  "MuShare/controllers/api/music/artist"
  "MuShare/controllers/api/user/player"
)

func Include(m *martini.ClassicMartini) {
  includePages(m)
  includeUserApi(m)
  includeMusicApi(m)
  includeOSSApi(m)
}

func includePages(m *martini.ClassicMartini) {
  m.Get("/", pages.Index)
  m.Get("/player", pages.Player)
  m.Get("/app**", UserSessionAuth, pages.App)
}

func includeUserApi(m *martini.ClassicMartini) {
  m.Group("/api/user/account", func(r martini.Router) {
    r.Post("/login", account.Login, account.LoginSetToken)
    r.Post("/register", account.Register)
    r.Post("/logout", account.Logout)
  }, RetrieveBody(reflect.TypeOf(user.Account{})))

  m.Group("/api/user/friend", func(r martini.Router) {
    r.Get("/list", friend.GetFriendsList)
    r.Get("/request", friend.GetRequests)
    r.Post("/request", friend.NewRequest)
    r.Put("/request", friend.AcceptRequest)
    r.Delete("/delete", friend.Delete)
  }, RetrieveBody(reflect.TypeOf(user.Friend{})), TokenAuth)

  m.Group("/api/user/profile", func(r martini.Router) {
    r.Get("/get", profile.GetProfile)
    r.Put("/update", profile.UpdateProfile)
  }, RetrieveBody(reflect.TypeOf(user.Profile{})), TokenAuth)

  m.Group("/api/user/search", func(r martini.Router) {
    r.Get("/stranger", search.Stranger)
  }, RetrieveBody(reflect.TypeOf(user.Search{})), TokenAuth)

  m.Group("/api/user/profile", func(r martini.Router) {
    r.Get("/:id", profile.GetProfile)
    r.Put("/update", profile.UpdateProfile)
  }, RetrieveBody(reflect.TypeOf(user.Profile{})), TokenAuth)

  m.Group("/api/user/player", func(r martini.Router) {
    r.Get("/list", player.GetPlayList)
    r.Post("/add", player.AddAudioToPlayList)
    r.Delete("/delete", player.DeleteAudioFromPlayList)
  }, RetrieveBody(reflect.TypeOf(user.Player{})), TokenAuth)
}

func includeMusicApi(m *martini.ClassicMartini) {

  m.Group("/api/music/artist", func(r martini.Router) {
    r.Get("/get", artists.GetArtist)
  }, RetrieveBody(reflect.TypeOf(music.Artist{})), TokenAuth)

  m.Group("/api/music/sheet", func(r martini.Router) {
    r.Post("/create", sheet.Create)
    r.Delete("/delete", sheet.Delete)
    r.Get("/list", sheet.ListSheet)
    r.Put("/update", sheet.Update)
    r.Post("/subscribe", sheet.Subscribe)
    r.Get("/list/subscription", sheet.ListSubscription)
  }, RetrieveBody(reflect.TypeOf(music.Sheet{})), TokenAuth)

  m.Group("/api/music/audio", func(r martini.Router) {
    r.Post("/add", audio.AddAudio)
    r.Delete("/delete", audio.DeleteAudio)
    r.Get("/list", audio.GetAudiosList)
    r.Put("/update", audio.Update)
  }, RetrieveBody(reflect.TypeOf(music.Audio{})), TokenAuth)

  m.Group("/api/music/migration", func(r martini.Router) {
    r.Put("/update", audio.SheetMigration)
  }, RetrieveBody(reflect.TypeOf(music.SheetMigration{})), TokenAuth)
}

func includeOSSApi(m *martini.ClassicMartini) {
  m.Group("/api/oss/sts", func(r martini.Router) {
    r.Get("/get", sts.GetSTS)
  }, RetrieveBody(reflect.TypeOf(oss.OSS{})), TokenAuth)
  m.Group("/api/oss/upload", func(r martini.Router) {
    r.Post("/audio", RetrieveBody(reflect.TypeOf(oss.OSSAudioCallback{})), upload.UploadAudio)
    r.Post("/avatar", RetrieveBody(reflect.TypeOf(oss.OSSAvatarCallback{})), upload.UploadAvatar)
  })
}