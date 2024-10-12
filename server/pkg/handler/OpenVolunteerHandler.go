package handler

import (
	"flonn-be/pkg/entity"
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h *handler) getAllOpenVolunteer(ctx *gin.Context) {
	items, err := h.repo.OpenVolunteer.GetAll()
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Retrieve successful", items)
}

func (h *handler) getOpenVolunteerByID(ctx *gin.Context) {
	var bodyFilter struct {
		ID int `uri:"id"`
	}

	if err := h.help.BindParam(ctx, &bodyFilter); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "failed to bind param", nil)
		return
	}

	items, err := h.repo.OpenVolunteer.GetByID(bodyFilter.ID)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Retrieve successful", items)
}

func (h *handler) getUserVolunteerStatus(ctx *gin.Context) {
	var bodyFilter struct {
		ID int `uri:"id"`
	}

	if err := h.help.BindParam(ctx, &bodyFilter); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "failed to bind param", nil)
		return
	}

	user, exist := ctx.Get("user")
	if !exist {
		h.help.ErrorResponse(ctx, http.StatusUnauthorized, "Unauthorized", nil)
		return
	}

	claims, ok := user.(entity.UserClaims)
	if !ok {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "invalid token", nil)
		return
	}

	userID := claims.ID

	participationStatus, err := h.repo.User.GetUserVolunteerStatus(userID, bodyFilter.ID)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	var status string
	switch participationStatus {
	case "aktif":
		status = "aktif"
	case "pending":
		status = "pending"
	case "tidak terdaftar":
		status = "tidak terdaftar"
	default:
		status = "tidak terdaftar"
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Status retrieved successfully", gin.H{
		"status": status,
	})
}

func (h *handler) userJoinVolunteer(ctx *gin.Context) {
	var bodyFilter struct {
		ID uint `uri:"id"`
	}

	if err := h.help.BindParam(ctx, &bodyFilter); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "failed to bind param", nil)
		return
	}

	user, exist := ctx.Get("user")
	if !exist {
		h.help.ErrorResponse(ctx, http.StatusUnauthorized, "Unauthorized", nil)
		return
	}

	claims, ok := user.(entity.UserClaims)
	if !ok {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "invalid token", nil)
		return
	}

	userID := claims.ID

	err := h.repo.User.UserJoinVolunteer(userID, bodyFilter.ID)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "User joined volunteer successfully", nil)
}
