package handler

import (
	"flonn-be/pkg/entity"
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h *handler) getAllBiodiversity(ctx *gin.Context) {
	biodiversities, err := h.repo.Biodiversity.GetAll()
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Retrieve successful", biodiversities)
}

func (h *handler) getBiodiversitiesByFilter(ctx *gin.Context) {
	var bodyFilter entity.FilterBiodiversity

	if err := h.help.BindParam(ctx, &bodyFilter); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "failed to bind param", nil)
		return
	}

	biodiversities, err := h.repo.Biodiversity.GetByFilter(bodyFilter)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Retrieve successful", biodiversities)
}
