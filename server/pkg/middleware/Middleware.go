package middleware

import (
	"flonn-be/pkg/entity"
	"flonn-be/pkg/helper"
	"flonn-be/pkg/jwt"
	"net/http"
	"os"

	"strings"

	"github.com/gin-gonic/gin"
)

func JwtMiddleware(help *helper.Helper) gin.HandlerFunc {
	return func(c *gin.Context) {

		authorization := c.Request.Header.Get("Authorization")
		if !strings.HasPrefix(authorization, "Bearer ") {
			help.ErrorResponse(c, http.StatusUnauthorized, "Unauthorized: Missing Bearer Token", nil)
			c.Abort()
			return
		}

		tokenJwt := authorization[7:]
		claims := entity.UserClaims{}
		jwtKey := os.Getenv("SECRET_KEY")

		if err := jwt.DecodeToken(tokenJwt, &claims, jwtKey); err != nil {
			help.ErrorResponse(c, http.StatusUnauthorized, "Unauthorized: Invalid Token", nil)
			c.Abort()
			return
		}

		c.Set("user", claims)
	}
}

func JwtMiddlewareAdmin(help *helper.Helper) gin.HandlerFunc {
	return func(c *gin.Context) {
		authorization := c.GetHeader("Authorization")
		if !strings.HasPrefix(authorization, "Bearer ") {
			help.ErrorResponse(c, http.StatusUnauthorized, "UnauthorizedJWT1Admin", nil)
			c.Abort()
			return
		}

		tokenJwt := authorization[7:]
		claims := entity.AdminClaims{}
		jwtKey := os.Getenv("SECRET_KEY")

		if err := jwt.DecodeToken(tokenJwt, &claims, jwtKey); err != nil {
			help.ErrorResponse(c, http.StatusUnauthorized, "Unauthorized2", nil)
			c.Abort()
			return
		}

		c.Set("admin", claims)
	}
}
