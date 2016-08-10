package operation

import (
	"MuShare/datatype"
	"fmt"
	"MuShare/datatype/request/oss"
)

func (this *OSSOperation) UploadCallback(body *oss.Callback) datatype.Response {
	fmt.Println(body.CallBackBody)
	return ok("abc", body)
}
