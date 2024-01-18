package handler

import (
	"flonn-be/pkg/entity"
	"flonn-be/pkg/jwt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func (h *handler) adminLogin(ctx *gin.Context) {
	var adminBody entity.AdminLogin

	if err := h.help.BindBody(ctx, &adminBody); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "invalid request login", nil)
		return
	}

	var admin entity.AdminLogin

	adminUname := os.Getenv("ADMIN_KEY")
	if adminBody.Key != adminUname {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "invalid request login an admin", nil)
		return
	}

	hashPW, _ := bcrypt.GenerateFromPassword([]byte(os.Getenv("ADMIN_PW")), bcrypt.DefaultCost)
	adminPW := string(hashPW)

	//cek password
	if err := bcrypt.CompareHashAndPassword([]byte(adminPW), []byte(adminBody.Password)); err != nil {
		h.help.ErrorResponse(ctx, http.StatusUnauthorized, err.Error(), nil)
		return
	}

	tokenJwt, err := jwt.GenerateTokenAdmin(admin)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, "create token failed", nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Login Berhasil", gin.H{
		"token": tokenJwt,
	})
}
