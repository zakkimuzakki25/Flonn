package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h *handler) getAllKingdom(ctx *gin.Context) {
	kingdoms, err := h.repo.Kingdom.GetAll()
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Retrieve successful", kingdoms)
}
