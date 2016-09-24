package utils

import (
  "io"
  "encoding/json"
  "crypto/rand"
  "encoding/base64"
  "golang.org/x/crypto/scrypt"
  "gopkg.in/redis.v3"
  "regexp"
  "strings"
  "MuShare/conf"
)

func JsonDecoder(r io.Reader, v interface{}) error {
  decoder := json.NewDecoder(r)
  err := decoder.Decode(&v)
  if err != nil {
    return err
  }
  return nil
}

func TokenEncode(userId string) string{
  id := []string{userId}
  return EncryptRandSequence(10, id...)
}

func TokenDecode(src string) (string, error){
  dst, err := base64.URLEncoding.DecodeString(src)
  return string(dst), err
}

func PsdHandler(psd string, salts []byte) (string, error){
  dk, err := scrypt.Key([]byte(psd), salts, 16384, 8, 1, 32)
  dst := base64.URLEncoding.EncodeToString(dk)
  return dst, err
}


func EncryptRandSequence(n int, userId ...string) string{
  var src []byte
  b := make([]byte, n)
  rand.Read(b)
  if userId != nil{
    src = append([]byte(userId[0] + ":"),b...)
  }else{
    src = b
  }
  dst := base64.URLEncoding.EncodeToString(src)
  return dst
}

func TokenAuth(token string, redis *redis.Client, config *conf.Conf) (bool, string) {
  var err error
  var decodeToken string
  var encodeToken string
  var expectToken string
  r := regexp.MustCompile(`\s*(?P<token>.{10,})\s*`)
  group := make(map[string]string)
  match := r.FindStringSubmatch(token)
  if len(match) < 2 {
    return false, ""
  }
  for i, name := range r.SubexpNames() {
    if i != 0 {
      group[name] = match[i]
    }
  }
  encodeToken = group["token"]
  decodeToken, err = TokenDecode(group["token"])
  if err != nil {
    panic(err.Error())
  }

  userId := strings.Split(decodeToken, ":")[0]

  hSetKey := config.Redis.Prefix + "_token"
  mapKey := "user_" + userId
  result := redis.HGet(hSetKey, mapKey)
  expectToken, _ = result.Result()
  if expectToken != encodeToken {
    return false, ""
  } else {
    return true, userId
  }
}


