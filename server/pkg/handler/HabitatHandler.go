package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h *handler) getAllHabitat(ctx *gin.Context) {
	habitats, err := h.repo.Habitat.GetAll()
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Retrieve successful", habitats)
}
