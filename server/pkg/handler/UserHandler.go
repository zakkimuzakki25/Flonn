package handler

import (
	"flonn-be/pkg/entity"
	"flonn-be/pkg/jwt"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func (h *handler) userRegister(ctx *gin.Context) {
	var userBody entity.UserRegister

	if err := h.help.BindBody(ctx, &userBody); err != nil {
		if len(userBody.Password) < 8 {
			h.help.ErrorResponse(ctx, http.StatusBadRequest, "Password must be at least 8 characters", nil)
			return
		}
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "Please enter valid data", nil)
		return
	}

	var userDB entity.User

	userDB.Firstname = userBody.Firstname
	userDB.Lastname = userBody.Lastname
	userDB.Email = userBody.Email

	hashPW, _ := bcrypt.GenerateFromPassword([]byte(userBody.Password), bcrypt.DefaultCost)
	userDB.Password = string(hashPW)

	if _, err := h.repo.User.Create(&userDB); err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Registration successful", nil)
}

func (h *handler) userLogin(ctx *gin.Context) {
	var userBody entity.UserLogin

	if err := h.help.BindBody(ctx, &userBody); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "Please enter valid data", nil)
		return
	}

	userDB, err := h.repo.User.GetByEmail(userBody.Email)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "Akun atau Password salah", nil)
		return
	}

	//cek password
	if err := bcrypt.CompareHashAndPassword([]byte(userDB.Password), []byte(userBody.Password)); err != nil {
		h.help.ErrorResponse(ctx, http.StatusUnauthorized, "invalid username or password", nil)
		return
	}

	tokenJwt, err := jwt.GenerateToken(userDB)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, "create token failed", nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Login Successfull", gin.H{
		"token": tokenJwt,
	})
}

func (h *handler) userAuthWithGoogle(ctx *gin.Context) {
	var userBody entity.UserAuthGoogle

	if err := h.help.BindBody(ctx, &userBody); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "Coba lagi", nil)
		return
	}

	var userDB entity.User

	fmt.Println(userBody)

	userDB.Firstname = userBody.Firstname
	userDB.Lastname = userBody.Lastname
	userDB.Email = userBody.Email
	userDB.Photo = userBody.Photo

	var userResp *entity.User
	user, err1 := h.repo.User.GetByEmail(userDB.Email)
	if err1 != nil {
		user, err := h.repo.User.Create(&userDB)
		if err != nil {
			h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
			return
		} else {
			userResp = user
		}
	} else {
		userResp = user
	}

	tokenJwt, err := jwt.GenerateToken(userResp)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, "create token failed", nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Registration successful", gin.H{
		"token": tokenJwt,
	})
}

func (h *handler) getUserProfile(ctx *gin.Context) {
	user, exist := ctx.Get("user")
	if !exist {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "Unauthorized", nil)
		return
	}

	claims, ok := user.(entity.UserClaims)
	if !ok {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "invalid token", nil)
		return
	}

	userID := claims.ID

	userDB, err := h.repo.User.GetByID(int(userID))
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	var resp struct {
		Photo     string `json:"photo"`
		Firstname string `json:"firstname"`
	}

	resp.Photo = userDB.Photo
	resp.Firstname = userDB.Firstname

	h.help.SuccessResponse(ctx, http.StatusOK, "Registration successful", resp)
}
