package handler

import (
	"flonn-be/pkg/entity"
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

func (h *handler) userPurchaseMerch(ctx *gin.Context) {
	var body entity.MerchPurchaseInput
	if err := h.help.BindBody(ctx, &body); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "Please enter valid data", nil)
		return
	}

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

	userID := claims.ID

	userDB, err := h.repo.User.GetByID(int(userID))
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	userDB.Floint -= body.Floint
	h.repo.User.Update(userDB)

	if err := h.repo.MerchPurchase.Create(&entity.MerchPurchase{
		MerchID:  body.MerchID,
		UserID:   userID,
		AddressLabel: body.AddressLabel,
		Address: body.Address,
		Name: body.Name,
		PhoneNumber: body.PhoneNumber,
		Date:     body.Date,
		Quantity: body.Quantity,
		Floint:   body.Floint,
		Status:   body.Status,
	}); err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Floint berhasil diturkarkan, silahkan cek status pengiriman pada profil kamu.", nil)
}