package helper

import (
	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
)

type HTTPResponse struct {
	Message   string      `json:"message"`
	IsSuccess bool        `json:"isSuccess"`
	Data      interface{} `json:"data"`
}

type Helper struct{}

func Init() *Helper {
	return &Helper{}
}

func (h *Helper) SuccessResponse(c *gin.Context, code int64, message string, data interface{}) {
	c.JSON(int(code), HTTPResponse{
		Message:   message,
		IsSuccess: true,
		Data:      data,
	})
}

func (h *Helper) ErrorResponse(c *gin.Context, code int64, message string, data interface{}) {
	c.JSON(int(code), HTTPResponse{
		Message:   message,
		IsSuccess: false,
		Data:      data,
	})
}

func (h *Helper) BindBody(c *gin.Context, body interface{}) interface{} {
	return c.ShouldBindWith(body, binding.JSON)
}

func (h *Helper) BindParam(c *gin.Context, param interface{}) error {
	if err := c.ShouldBindUri(param); err != nil {
		return err
	}

	return c.ShouldBindWith(param, binding.Query)
}
