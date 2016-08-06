package sts

import (
  "net/url"
  "strings"
  "MuShare/conf"
  "time"
  "crypto/hmac"
  "crypto/sha1"
  "encoding/base64"
  "math/rand"
  "strconv"
  "net/http"
  "io/ioutil"
  "MuShare/datatype"
  "encoding/json"
  "MuShare/datatype/request/oss"
)

func (this *OSS)GetSTS(body *oss.OSS, oss conf.OSS) datatype.Response {
  canonicalizedQueryString := Urlencoded("AccessKeyId") + "=" + Urlencoded(oss.AccessKeyId) + "&" +
  Urlencoded("Action") + "=" + Urlencoded("AssumeRole") + "&" +
  Urlencoded("Format") + "=" + Urlencoded("JSON") + "&" +
  Urlencoded("RoleArn") + "=" + Urlencoded(oss.RoleArn) + "&" +
  Urlencoded("RoleSessionName") + "=" + Urlencoded("client") + "&" +
  Urlencoded("SignatureMethod") + "=" + Urlencoded("HMAC-SHA1") + "&" +
  Urlencoded("SignatureNonce") + "=" + Urlencoded(RandomIntString()) + "&" +
  Urlencoded("SignatureVersion") + "=" + Urlencoded("1.0") + "&" +
  Urlencoded("Timestamp") + "=" + Urlencoded(time.Now().UTC().Format("2006-01-02T15:04:01Z")) + "&" +
  Urlencoded("Version") + "=" + Urlencoded("2015-04-01")
  stringToSign := "GET" + "&" + Urlencoded("/") + "&" + Urlencoded(canonicalizedQueryString)
  signature := Signature(stringToSign, oss.SecretKey)
  query := canonicalizedQueryString + "&" + Urlencoded("Signature") + "=" + Urlencoded(signature)
  resp, err1 := http.Get("https://sts.aliyuncs.com/?" + query);
  if err1 != nil {
    panic(err1.Error())
  }
  defer resp.Body.Close()
  if resp.StatusCode == http.StatusForbidden {
    forbidden("")
  } else if resp.StatusCode != http.StatusOK {
    badRequest("")
  }
  ossResp, err2 := ioutil.ReadAll(resp.Body)
  if err2 != nil {
    panic(err2.Error())
  }
  m := make(map[string]interface{})
  respBody := make(map[string]interface{})
  json.Unmarshal(ossResp, &m)
  c := m["Credentials"].(map[string]interface{})
  respBody["accessKeySecret"] = c["AccessKeySecret"]
  respBody["accessKeyId"] = c["AccessKeyId"]
  respBody["securityToken"] = c["SecurityToken"]
  respBody["expiration"] = c["Expiration"]
  return ok("", respBody)
}

func Urlencoded(str string) string {
  encoded := url.QueryEscape(str);
  encoded = strings.Replace(encoded, "+", "%20", -1)
  encoded = strings.Replace(encoded, "*", "%2A", -1)
  encoded = strings.Replace(encoded, "%7E", "~", -1)
  return encoded
}

func Signature(input, key string) string {
  key_for_sign := []byte(key + "&");
  h := hmac.New(sha1.New, key_for_sign);
  h.Write([]byte(input));
  return base64.StdEncoding.EncodeToString(h.Sum(nil))
}

func RandomIntString() string {
  s := rand.NewSource(time.Now().UnixNano())
  r := rand.New(s)
  return strconv.Itoa(r.Intn(1000000000));
}

