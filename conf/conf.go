package conf

import (
  "os"
  "encoding/json"
)

type Mysql struct {
  User     string
  Password string
  Database string
}

type Redis struct {
  Addr     string
  Password string
  Prefix   string
}

type App  struct {
  Port string
  Host string
}

type OSS struct {
  AccessKeyId string
  SecretKey   string
  RoleArn     string
  EndPoint    string
  Bucket      string
}

type Conf struct {
  Mysql Mysql
  Redis Redis
  App   App
  OSS   OSS
}

type All  struct {
  Development Conf
  Test        Conf
  Production  Conf
}

func LoadConf(env string) *Conf {
  file, err := os.Open("conf/conf.json")
  if err != nil {
    panic("Can't Open Config File")
  }
  decoder := json.NewDecoder(file)
  all := All{}
  err = decoder.Decode(&all)
  if err != nil {
    panic("Load Config File Failed")
  }
  if (env == "production") {
    return &all.Production;
  }else if (env == "development") {
    return &all.Development;
  }else {
    return &all.Test;
  }
}
