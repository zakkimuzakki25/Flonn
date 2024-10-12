package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h *handler) getAllUnverifiedKTP(ctx *gin.Context) {
	type ktpResp struct {
		Link      string `json:"link"`
		FirstName string `json:"first_name"`
		Lastname  string `json:"last_name"`
		Email     string `json:"email"`
		UserID    int    `json:"user_id"`
	}

	items, err := h.repo.KTP.GetAllUnverified()
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	var response []ktpResp = nil
	for _, item := range items {
		user, err := h.repo.User.GetByID(int(item.UserID))
		if err != nil {
			h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
			return
		}

		response = append(response, ktpResp{
			Link:      item.Link,
			FirstName: user.Firstname,
			Lastname:  user.Lastname,
			Email:     user.Email,
			UserID:    int(user.ID),
		})
	}

	if response != nil {
		h.help.SuccessResponse(ctx, http.StatusOK, "Retrieve successful", response)
	} else {
		h.help.SuccessResponse(ctx, http.StatusOK, "Retrieve successful", nil)

	}
}

func (h *handler) updateKTPStatus(ctx *gin.Context) {
	type bodyUpdate struct {
		Status string `json:"status"`
		UserID int    `json:"user_id"`
	}

	var body bodyUpdate
	if err := h.help.BindBody(ctx, &body); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "failed to bind param", nil)
		return
	}

	ktp, err := h.repo.KTP.GetByUserID(uint(body.UserID))
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	ktp.Status = body.Status
	if err := h.repo.KTP.Update(ktp); err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Update successful", nil)
}
