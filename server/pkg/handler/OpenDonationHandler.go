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

	sumDonations, err := h.repo.OpenDonation.SumDonations(bodyFilter.ID)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, "Failed to count donors", nil)
		return
	}

	var respons = entity.OpenDonationResponse{
		ID:          items.ID,
		Title:       items.Title,
		Photo:       items.Photo,
		Description: items.Description,
		Target:      items.Target,
		IsDisaster:  items.IsDisaster,
		Total:       sumDonations,
		TotalDonors: totalDonors,
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Retrieve successful", respons)
}

func (h *handler) getDonationByID(ctx *gin.Context) {
	var bodyFilter struct {
		ID int `uri:"id"`
	}

	if err := h.help.BindParam(ctx, &bodyFilter); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "failed to bind param", nil)
		return
	}

	item, err := h.repo.Donation.GetByID(bodyFilter.ID)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Retrieve successful", item)
}

func (h *handler) addDonation(ctx *gin.Context) {
	user, exist := ctx.Get("user")
	if !exist {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "Unauthorized", nil)
		return
	}

	claims, ok := user.(entity.UserClaims)
	if !ok {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "invalid token", nil)
		return
	}

	var body struct {
		OpenDonationID int     `json:"open_donation_id"`
		Amount         float64 `json:"amount"`
		PaymentMethod  string  `json:"payment_method"`
	}

	if err := h.help.BindBody(ctx, &body); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "not valid", nil)
		return
	}

	var donation entity.Donation
	donation.UserID = int(claims.ID)
	donation.Amount = body.Amount
	donation.PaymentMethod = body.PaymentMethod
	donation.OpenDonationID = body.OpenDonationID

	resp, err := h.repo.Donation.Create(&donation)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Registration successful", resp)
}
