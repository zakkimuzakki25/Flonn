package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h *handler) getAllDisaster(ctx *gin.Context) {
	disasters, err := h.repo.Disaster.GetAll()
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Retrieve successful", disasters)
}
