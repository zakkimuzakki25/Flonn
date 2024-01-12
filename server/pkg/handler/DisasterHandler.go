package handler

import (
	"flonn-be/pkg/entity"
	"net/http"
	"strconv"

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

func (h *handler) getDisasterYears(ctx *gin.Context) {
	disasters, err := h.repo.Disaster.GetAll()
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	yearMap := make(map[int]struct{})

	var disasterYears []struct {
		ID   int `json:"id"`
		Year int `json:"name"`
	}

	for _, disaster := range disasters {
		if _, exists := yearMap[disaster.Date.Year()]; !exists {
			disasterYear := struct {
				ID   int `json:"id"`
				Year int `json:"name"`
			}{Year: disaster.Date.Year(), ID: disaster.Date.Year()}

			disasterYears = append(disasterYears, disasterYear)
			yearMap[disaster.Date.Year()] = struct{}{}
		}
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Retrieve successful", disasterYears)
}

func (h *handler) getDisastersByFilter(ctx *gin.Context) {
	var bodyFilter entity.FilterDisaster

	if err := h.help.BindQuery(ctx, &bodyFilter); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "failed to bind query", nil)
		return
	}

	disasters, err := h.repo.Disaster.GetAll()
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	var disastersResponse []*entity.Disaster
	for _, disaster := range disasters {
		if strconv.Itoa(disaster.Date.Year()) == bodyFilter.Year || bodyFilter.Year == "" {
			if strconv.Itoa(int(disaster.Date.Month())) == bodyFilter.Month || bodyFilter.Month == "" {
				disastersResponse = append(disastersResponse, disaster)
			}
		}
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Retrieve successful", disastersResponse)
}
