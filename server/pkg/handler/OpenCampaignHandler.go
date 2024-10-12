package handler

import (
	"flonn-be/pkg/entity"
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h *handler) getAllOpenCampaign(ctx *gin.Context) {
	items, err := h.repo.OpenCampaign.GetAll()
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Retrieve successful", items)
}

func (h *handler) getOpenCampaignByID(ctx *gin.Context) {
	var bodyFilter struct {
		ID int `uri:"id"`
	}

	if err := h.help.BindParam(ctx, &bodyFilter); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "failed to bind param", nil)
		return
	}

	items, err := h.repo.OpenCampaign.GetByID(bodyFilter.ID)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	tot_participants, err := h.repo.OpenCampaign.CountParticipants(bodyFilter.ID)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	resp := entity.OpenCampaignResponse{
		ID:                items.ID,
		Title:             items.Title,
		Purpose:           items.Purpose,
		Photo:             items.Photo,
		Highlight:         items.Highlight,
		WhyText:           items.WhyText,
		Steps:             items.Steps,
		StepsPhoto:        items.StepsPhoto,
		Keterangan:        items.Keterangan,
		TotParticipants:   tot_participants,
		OpenCampaignTasks: items.OpenCampaignTasks,
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Retrieve successful", resp)
}

func (h *handler) getUserCampaignStatus(ctx *gin.Context) {
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

	participationStatus, err := h.repo.User.GetUserCampaignStatus(userID, bodyFilter.ID)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	var status string
	switch participationStatus {
	case "accepted":
		status = "accepted"
	case "pending":
		status = "pending"
	case "rejected":
		status = "tertolak"
	default:
		status = "tidak terdaftar"
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Status retrieved successfully", gin.H{
		"status": status,
	})
}

func (h *handler) userJoinCampaign(ctx *gin.Context) {
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

	var body struct {
		Photo string `json:"photo"`
	}
	if err := h.help.BindBody(ctx, &body); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "failed to bind param", nil)
		return
	}

	userID := claims.ID

	err := h.repo.User.UserJoinCampaign(userID, uint(bodyFilter.ID), body.Photo)
	if err != nil {
		err := h.repo.User.UserUpdateCampaign(userID, uint(bodyFilter.ID), body.Photo)
		if err != nil {
			h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
			return
		}
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Join campaign successful", nil)
}

func (h *handler) getCampaignProofByID(ctx *gin.Context) {
	var bodyFilter struct {
		ID int `uri:"id"`
	}

	if err := h.help.BindParam(ctx, &bodyFilter); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "failed to bind param", nil)
		return
	}

	type responseModel struct {
		ProofPhoto string `json:"proof_photo"`
		KTPPhoto   string `json:"ktp_photo"`
		Status     string `json:"status"`
		Title      string `json:"title"`
		TaskID     int    `json:"task_id"`
		UserIDD    int    `json:"user_id"`
	}

	var response []responseModel

	items, err := h.repo.OpenCampaignTask.GetAllByCampaignID(bodyFilter.ID)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	for _, item := range items {
		taskParticipants, err := h.repo.OpenCampaignTask.GetAllUnverifiedParticipants(int(item.ID))
		if err != nil {
			h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
			return
		}

		for _, participant := range taskParticipants {
			user, err := h.repo.User.GetByID(int(participant.UserID))
			if err != nil {
				h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
				return
			}
			ktp, err := h.repo.KTP.GetByUserID(user.ID)
			response = append(response, responseModel{
				ProofPhoto: participant.Photo,
				KTPPhoto:   ktp.Link,
				Status:     participant.Status,
				Title:      item.Title,
				TaskID:     int(item.ID),
				UserIDD:    int(user.ID),
			})
		}
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Retrieve successful", response)
}

func (h *handler) updateCampaignProofStatus(ctx *gin.Context) {
	var body struct {
		TaskID int    `json:"task_id"`
		UserID int    `json:"user_id"`
		Status string `json:"status"`
	}
	if err := h.help.BindBody(ctx, &body); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "failed to bind param", nil)
		return
	}
	err := h.repo.OpenCampaignTask.UpdateProofStatus(body.TaskID, body.UserID, body.Status)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}
	h.help.SuccessResponse(ctx, http.StatusOK, "Update successful", nil)
}
