package handler

import (
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
