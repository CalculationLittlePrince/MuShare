package profile

import (
  "github.com/jinzhu/gorm"
  "net/http"
  "MuShare/datatype"
)

type Profile struct {
  DB *gorm.DB
}

var gender map[string]string;

func init() {
  gender = map[string]string{"male": "male", "female": "female"}
}

func ok(responseText string, body interface{}) datatype.Response {
  res := datatype.Response{
    Status: http.StatusOK,
    ResponseText: responseText,
    Body: body,
  }

  return res
}

func badRequest(responseText string) datatype.Response {
  res := datatype.Response{
    Status: http.StatusBadRequest,
    ResponseText: responseText,
  }
  return res
}

func forbidden(responseText string) datatype.Response {

  res := datatype.Response{
    Status:http.StatusForbidden,
    ResponseText: responseText,
  }
  return res
}

