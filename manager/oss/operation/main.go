package operation

import (
	"net/http"
	"MuShare/datatype"
	"github.com/jinzhu/gorm"
)

type OSSOperation struct {
  DB *gorm.DB
}

func ok(responseText string, body interface{}) datatype.Response{
  res := datatype.Response{
    Status: http.StatusOK,
    ResponseText: responseText,
    Body: body,
  }

  return res
}

func badRequest(responseText string) datatype.Response{
  res := datatype.Response{
    Status: http.StatusBadRequest,
    ResponseText: responseText,
  }
  return res
}

func forbidden(responseText string) datatype.Response{
  res := datatype.Response{
    Status:http.StatusForbidden,
    ResponseText: responseText,
  }
  return res
}

