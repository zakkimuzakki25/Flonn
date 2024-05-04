package handler

import (
	"flonn-be/pkg/entity"
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h *handler) getAllOpenDonation(ctx *gin.Context) {
	items, err := h.repo.OpenDonation.GetAll()
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Retrieve successful", items)
}

func (h *handler) getOpenDonationByID(ctx *gin.Context) {
	var bodyFilter struct {
		ID int `uri:"id"`
	}

	if err := h.help.BindParam(ctx, &bodyFilter); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "failed to bind param", nil)
		return
	}

	items, err := h.repo.OpenDonation.GetByID(bodyFilter.ID)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	totalDonors, err := h.repo.OpenDonation.CountDonors(bodyFilter.ID)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, "Failed to count donors", nil)
		return
	}

	var respons = entity.OpenDonationResponse{
		ID:          items.ID,
		Title:       items.Title,
		Photo:       items.Photo,
		Description: items.Description,
		Total:       items.Total,
		Target:      items.Target,
		IsDisaster:  items.IsDisaster,
		TotalDonors: totalDonors,
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Retrieve successful", respons)
}
