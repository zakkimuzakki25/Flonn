package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h *handler) getDisasterTypeDetail(ctx *gin.Context) {
	var idParam struct {
		ID uint `uri:"id"`
	}

	if err := h.help.BindParam(ctx, &idParam); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "failed to bind param", nil)
		return
	}

	disasterType, err := h.repo.DisasterType.GetByID((int(idParam.ID)))
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Retrieve successful", disasterType)
}
