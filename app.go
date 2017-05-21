package main

import (
  _ "github.com/jinzhu/gorm/dialects/mysql"
  "github.com/go-martini/martini"
  "github.com/martini-contrib/sessions"
  config "MuShare/conf"
  "MuShare/router"
  "MuShare/middlewares"
)

func main() {
  m := martini.Classic()
  conf := config.LoadConf(martini.Env)
  //create new session middleware
  store := sessions.NewCookieStore([]byte("musharesecret"))
  store.Options(sessions.Options{
    Path: "/",
    Domain: conf.App.Host,
    MaxAge: 60 * 60 * 60 * 24,
    HttpOnly: true,
  })

  //middleware
  m.Handlers(
    middlewares.LogOutput,
    middlewares.Recovery(),
    martini.Logger(),
    martini.Static("static", martini.StaticOptions{}),
    sessions.Sessions("mushare_session", store),
    middlewares.InjectRedis(),
    middlewares.InjectDB(),
  )
  m.Map(conf)

  //routers
  router.Include(m)
  //start server
  m.RunOnAddr(":" + conf.App.Port)
}
