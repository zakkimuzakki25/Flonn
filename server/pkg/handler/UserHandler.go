package handler

import (
	"flonn-be/pkg/entity"
	"flonn-be/pkg/jwt"
	"fmt"
	"net/http"
	"sort"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func (h *handler) userRegister(ctx *gin.Context) {
	var userBody entity.UserRegister

	if err := h.help.BindBody(ctx, &userBody); err != nil {
		if len(userBody.Password) < 8 {
			h.help.ErrorResponse(ctx, http.StatusBadRequest, "Password must be at least 8 characters", nil)
			return
		}
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "Please enter valid data", nil)
		return
	}

	var userDB entity.User

	userDB.Firstname = userBody.Firstname
	userDB.Lastname = userBody.Lastname
	userDB.Email = userBody.Email

	hashPW, _ := bcrypt.GenerateFromPassword([]byte(userBody.Password), bcrypt.DefaultCost)
	userDB.Password = string(hashPW)

	if _, err := h.repo.User.Create(&userDB); err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Registration successful", nil)
}

func (h *handler) userLogin(ctx *gin.Context) {
	var userBody entity.UserLogin

	if err := h.help.BindBody(ctx, &userBody); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "Please enter valid data", nil)
		return
	}

	userDB, err := h.repo.User.GetByEmail(userBody.Email)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "Akun atau Password salah", nil)
		return
	}

	//cek password
	if err := bcrypt.CompareHashAndPassword([]byte(userDB.Password), []byte(userBody.Password)); err != nil {
		h.help.ErrorResponse(ctx, http.StatusUnauthorized, "invalid username or password", nil)
		return
	}

	tokenJwt, err := jwt.GenerateToken(userDB)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, "create token failed", nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Login Successfull", gin.H{
		"token": tokenJwt,
	})
}

func (h *handler) userAuthWithGoogle(ctx *gin.Context) {
	var userBody entity.UserAuthGoogle

	if err := h.help.BindBody(ctx, &userBody); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "Coba lagi", nil)
		return
	}

	var userDB entity.User

	fmt.Println(userBody)

	userDB.Firstname = userBody.Firstname
	userDB.Lastname = userBody.Lastname
	userDB.Email = userBody.Email
	userDB.Photo = userBody.Photo

	var userResp *entity.User
	user, err1 := h.repo.User.GetByEmail(userDB.Email)
	if err1 != nil {
		user, err := h.repo.User.Create(&userDB)
		if err != nil {
			h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
			return
		} else {
			userResp = user
		}
	} else {
		userResp = user
	}

	tokenJwt, err := jwt.GenerateToken(userResp)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, "create token failed", nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Registration successful", gin.H{
		"token": tokenJwt,
	})
}

func (h *handler) getUserNavbarProfile(ctx *gin.Context) {
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
		h.help.ErrorResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	var resp struct {
		Photo     string `json:"photo"`
		Firstname string `json:"firstname"`
	}

	resp.Photo = userDB.Photo
	resp.Firstname = userDB.Firstname

	h.help.SuccessResponse(ctx, http.StatusOK, "Registration successful", resp)
}

func (h *handler) getUserProfile(ctx *gin.Context) {
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
		h.help.ErrorResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	ktpDB, _ := h.repo.KTP.GetByUserID(userID)

	donationHistories, _ := h.repo.User.GetDonationHistory(userID)

	volunteerHistories, _ := h.repo.User.GetVolunteerHistory(userID)

	var resp struct {
		Photo       string `json:"photo"`
		Fullname    string `json:"fullname"`
		Firstname   string `json:"firstname"`
		Lastname    string `json:"lastname"`
		Birthdate   string `json:"birthdate"`
		Address     string `json:"address"`
		Email       string `json:"email"`
		Gender      string `json:"gender"`
		Floint      int    `json:"floint"`
		FlointTotal int    `json:"floint_total"`
		Level       int    `json:"level"`
		Tier        string `json:"tier"`
		KTPStatus   string `json:"ktp_status"`
		KTPLink     string `json:"ktp_link"`
		Histories   []struct {
			Date        time.Time `json:"date"`
			Description string    `json:"description"`
			Status      string    `json:"status"`
			Floint      int       `json:"floint"`
		} `json:"histories"`
	}

	resp.Photo = userDB.Photo
	resp.Fullname = userDB.Firstname + " " + userDB.Lastname
	resp.Firstname = userDB.Firstname
	resp.Lastname = userDB.Lastname
	resp.Email = userDB.Email
	resp.Gender = userDB.JenisKelamin
	resp.Birthdate = userDB.Birthdate
	resp.Address = userDB.Address
	if ktpDB != nil {
		resp.KTPStatus = ktpDB.Status
		resp.KTPLink = ktpDB.Link
	}
	resp.Floint = userDB.Floint
	resp.FlointTotal = userDB.FlointTotal
	resp.Level = userDB.Level

	levelDB, err := h.repo.Level.GetDetailByLevel(userDB.Level)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, "failed to get level detail", nil)
		return
	}

	resp.Tier = levelDB.Tier

	for _, donation := range donationHistories {
		openDonation, err := h.repo.OpenDonation.GetByID(int(donation.OpenDonationID))
		if err != nil {
			h.help.ErrorResponse(ctx, http.StatusInternalServerError, "failed to get donation detail", nil)
			return
		}

		amount := strconv.Itoa(int(donation.Amount))
		length := len(amount)

		if length > 3 {
			for i := length - 3; i > 0; i -= 3 {
				amount = amount[:i] + "." + amount[i:]
			}
		}

		description := "Berhasil donasi sebesar RP " + amount + " dalam program " + openDonation.Title

		resp.Histories = append(resp.Histories, struct {
			Date        time.Time `json:"date"`
			Description string    `json:"description"`
			Status      string    `json:"status"`
			Floint      int       `json:"floint"`
		}{
			Date:        donation.CreatedAt,
			Description: description,
			Status:      donation.Status,
			Floint:      int(donation.Amount * 0.0001),
		})
	}

	for _, volunteer := range volunteerHistories {
		openVolunteer, err := h.repo.OpenVolunteer.GetByID(int(volunteer.OpenVolunteerID))
		if err != nil {
			h.help.ErrorResponse(ctx, http.StatusInternalServerError, "failed to get volunteer detail", nil)
			return
		}

		var description string
		var floint int
		if volunteer.Status == "aktif" {
			description = "Berhasil menjadi volunteer di " + openVolunteer.Title
			floint = 5
		} else {
			description = "Berhasil mendaftar volunteer di " + openVolunteer.Title + " dan masih dalam proses verifikasi."
			floint = 0
		}

		resp.Histories = append(resp.Histories, struct {
			Date        time.Time `json:"date"`
			Description string    `json:"description"`
			Status      string    `json:"status"`
			Floint      int       `json:"floint"`
		}{
			Date:        volunteer.CreatedAt,
			Description: description,
			Status:      volunteer.Status,
			Floint:      floint,
		})
	}

	sort.Slice(resp.Histories, func(i, j int) bool {
		return resp.Histories[i].Date.After(resp.Histories[j].Date)
	})

	h.help.SuccessResponse(ctx, http.StatusOK, "Registration successful", resp)
}

func (h *handler) userUpdateProfile(ctx *gin.Context) {
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
		h.help.ErrorResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	var userBody entity.UserUpdateProfile
	if err := h.help.BindBody(ctx, &userBody); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "Please enter valid data", nil)
		return
	}

	if userBody.Firstname != "" {
		userDB.Firstname = userBody.Firstname
	}
	if userBody.Lastname != "" {
		userDB.Lastname = userBody.Lastname
	}
	if userBody.Birthdate != "" {
		userDB.Birthdate = userBody.Birthdate
	}
	if userBody.Address != "" {
		userDB.Address = userBody.Address
	}
	if userBody.JenisKelamin != "" {
		userDB.JenisKelamin = userBody.JenisKelamin
	}

	if err := h.repo.User.Update(userDB); err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Update profile successful", nil)
}

func (h *handler) userUpdatePhotoProfile(ctx *gin.Context) {
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
		h.help.ErrorResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	var userBody struct {
		Photo string `json:"photo"`
	}
	if err := h.help.BindBody(ctx, &userBody); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "Please enter valid data", nil)
		return
	}

	if userBody.Photo != "" {
		userDB.Photo = userBody.Photo
	}

	if err := h.repo.User.Update(userDB); err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Update profile successful", nil)
}

func (h *handler) userKTPUpload(ctx *gin.Context) {
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

	var sendBody struct {
		Link string `json:"link"`
	}
	if err := h.help.BindBody(ctx, &sendBody); err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "Please send valid file", nil)
		return
	}

	if sendBody.Link == "" {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "Please send valid file", nil)
		return
	}

	ktpDB := entity.KTP{
		UserID: userID,
		Link:   sendBody.Link,
	}

	if h.repo == nil || h.repo.KTP == nil {
		fmt.Println("Repository or KTP is nil")
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, "Repository not initialized", nil)
		return
	}

	if _, err := h.repo.KTP.Create(&ktpDB); err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Upload KTP successful", nil)
}

func (h *handler) userGetKTPStatus(ctx *gin.Context) {
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

	var resp struct {
		Status string `json:"status"`
		Link   string `json:"link"`
	}

	ktpDB, err := h.repo.KTP.GetByUserID(userID)
	if err != nil {
		resp.Status = "unverified"
		h.help.ErrorResponse(ctx, http.StatusOK, "Recors not found", resp)
	}

	resp.Status = ktpDB.Status
	resp.Link = ktpDB.Link

	h.help.SuccessResponse(ctx, http.StatusOK, "Get KTP status successful", resp)
}

func (h *handler) userGetFlointDetail(ctx *gin.Context) {
	user, exist := ctx.Get("user")
	if !exist {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "Unauthorized", nil)
		return
	}

	claims, ok := user.(entity.UserClaims)
	if !ok {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "Invalid token", nil)
		return
	}
	userID := claims.ID

	userDB, err := h.repo.User.GetByID(int(userID))
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	levelDB, err := h.repo.Level.GetDetailByLevel(userDB.Level)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, "Failed to get level detail", nil)
		return
	}

	if levelDB == nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, "level detail not found", nil)
		return
	}

	levelBefore := userDB.Level - 1
	if levelBefore < 0 {
		levelBefore = 0
	}

	levelDbBefore, err := h.repo.Level.GetDetailByLevel(levelBefore)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusInternalServerError, "Failed to get level detail", nil)
		return
	}
	maxBefore := 0
	if userDB.Level > 0 {
		maxBefore = levelDbBefore.MaxFloint
	}

	resp := entity.UserFlointDetailResp{
		Fullname:        userDB.Firstname + " " + userDB.Lastname,
		Floint:          userDB.Floint,
		FlointTotal:     userDB.FlointTotal,
		MaxFloint:       levelDB.MaxFloint,
		MaxFlointBefore: maxBefore,
		Level:           userDB.Level,
		Tier:            levelDB.Tier,
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Get floint detail successful", resp)
}

func (h *handler) userGetAllPurchaseStatus(ctx *gin.Context) {
	user, exist := ctx.Get("user")
	if !exist {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "Unauthorized", nil)
		return
	}

	claims, ok := user.(entity.UserClaims)
	if !ok {
		h.help.ErrorResponse(ctx, http.StatusBadRequest, "Invalid token", nil)
		return
	}
	userID := claims.ID

	purchaseDB, err := h.repo.MerchPurchase.GetByUserID(userID)
	if err != nil {
		h.help.ErrorResponse(ctx, http.StatusOK, "Records not found", nil)
	}

	var MerchsResp []struct{
		MerchPhoto   string    `json:"merch_photo"`
		MerchName    string    `json:"merch_name"`
		UserID       uint      `json:"user_id"`
		AddressLabel string    `json:"address_label"`
		Address      string    `json:"address"`
		Name         string    `json:"name"`
		PhoneNumber  string    `json:"phone_number"`
		Date         time.Time `json:"date"`
		Quantity     int       `json:"quantity"`
		Floint       int       `json:"floint"`
		Status       string    `json:"status" gorm:"default:'diproses'"`
	}

	for _, purchase := range purchaseDB {
		merchDB, err := h.repo.Merch.GetByID(int(purchase.MerchID))
		if err != nil {
			h.help.ErrorResponse(ctx, http.StatusInternalServerError, "Failed to get merch", nil)
			return
		}

		MerchsResp = append(MerchsResp, struct {
			MerchPhoto   string    `json:"merch_photo"`
			MerchName    string    `json:"merch_name"`
			UserID       uint      `json:"user_id"`
			AddressLabel string    `json:"address_label"`
			Address      string    `json:"address"`
			Name         string    `json:"name"`
			PhoneNumber  string    `json:"phone_number"`
			Date         time.Time `json:"date"`
			Quantity     int       `json:"quantity"`
			Floint       int       `json:"floint"`
			Status       string    `json:"status" gorm:"default:'diproses'"`
		}{
			MerchPhoto:   merchDB.Photo,
			MerchName:    merchDB.Title,
			UserID:       purchase.UserID,
			AddressLabel: purchase.AddressLabel,
			Address:      purchase.Address,
			Name:         purchase.Name,
			PhoneNumber:  purchase.PhoneNumber,
			Date:         purchase.Date,
			Quantity:     purchase.Quantity,
			Floint:       purchase.Floint,
			Status:       purchase.Status,
		})
	}

	h.help.SuccessResponse(ctx, http.StatusOK, "Get all purchase status successful", MerchsResp)
}
