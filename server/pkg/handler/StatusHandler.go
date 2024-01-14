package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h *handler) getAllStatus(ctx *gin.Context) {
	statuses, err := h.repo.Status.GetAll()
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Retrieve successful", statuses)
}
