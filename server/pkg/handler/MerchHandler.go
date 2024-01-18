package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h *handler) getAllMerch(ctx *gin.Context) {
	items, err := h.repo.Merch.GetAll()
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Retrieve successful", items)
}
