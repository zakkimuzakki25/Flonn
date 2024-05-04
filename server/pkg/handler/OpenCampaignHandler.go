package handler

import (
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

	h.help.SuccessResponse(ctx, http.StatusOK, "Retrieve successful", items)
}
