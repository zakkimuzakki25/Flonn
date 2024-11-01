package handler

import (
	"flonn-be/pkg/helper"
	"flonn-be/pkg/middleware"
	"flonn-be/pkg/repository"
	"fmt"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type handler struct {
	http *gin.Engine
	db   *gorm.DB
	repo *repository.Repository
	help *helper.Helper
}

func Init(db *gorm.DB) *handler {
	rest := handler{
		http: gin.New(),
		db:   db,
		repo: repository.Init(db),
		help: helper.Init(),
	}

	// CORS
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AllowMethods = []string{"GET", "POST", "OPTIONS", "PUT"}
	config.AllowHeaders = []string{"Authorization", "Content-Type"}
	config.AllowCredentials = true
	rest.http.Use(cors.New(config))

	// Apply CORS middleware to the whole application
	rest.http.Use(cors.New(config))

	rest.registerRoutes()

	return &rest
}

func (h *handler) Run() {
	h.http.Run(fmt.Sprintf(":%s", os.Getenv("PORT")))
}

func (h *handler) registerRoutes() {
	api := h.http.Group("/api")
	admin := h.http.Group("/admin")

	api.Use(middleware.JwtMiddleware(h.help))
	admin.Use(middleware.JwtMiddlewareAdmin(h.help))

	admin.GET("/campaign/proof/:id", h.getCampaignProofByID)
	admin.GET("/ktp/unverified", h.getAllUnverifiedKTP)
	admin.POST("/ktp/update", h.updateKTPStatus)
	admin.POST("/campaign/proof/update", h.updateCampaignProofStatus)
	admin.GET("/test", h.adminAuthTest)

	h.http.POST("/user/register", h.userRegister)
	h.http.POST("/user/auth/google", h.userAuthWithGoogle)
	h.http.POST("/user/login", h.userLogin)
	h.http.POST("/admin/login", h.adminLogin)

	api.GET("/navbar", h.getUserNavbarProfile)
	api.GET("/user/profile", h.getUserProfile)
	api.POST("/user/profile", h.userUpdateProfile)
	api.POST("/user/photo", h.userUpdatePhotoProfile)
	api.POST("/user/ktp", h.userKTPUpload)
	api.GET("/user/ktp-status", h.userGetKTPStatus)
	api.GET("/user/floint-detail", h.userGetFlointDetail)

	h.http.GET("/disaster/all", h.getAllDisaster)
	h.http.GET("/disaster/years", h.getDisasterYears)
	h.http.GET("/disaster/filter", h.getDisastersByFilter)
	h.http.GET("/disaster/donation", h.getLatestDisasters)
	h.http.GET("/disaster-type/:id", h.getDisasterTypeDetail)

	h.http.GET("/biodiversity/all", h.getAllBiodiversity)
	h.http.GET("/biodiversity/:id", h.getBiodiversityByID)
	h.http.GET("/biodiversity/filter", h.getBiodiversitiesByFilter)
	h.http.GET("/kingdom/all", h.getAllKingdom)
	h.http.GET("/habitat/all", h.getAllHabitat)
	h.http.GET("/status/all", h.getAllStatus)

	h.http.GET("/merch", h.getAllMerch)
	api.POST("/merch/purchase", h.userPurchaseMerch)
	api.GET("/merch/purchase", h.userGetAllPurchaseStatus)

	h.http.GET("/donation/all", h.getAllOpenDonation)
	h.http.GET("/donation/:id", h.getOpenDonationByID)
	api.POST("/donation/add", h.addDonation)
	api.GET("/payment/:id", h.getDonationByID)

	h.http.GET("/volunteer/all", h.getAllOpenVolunteer)
	h.http.GET("/volunteer/:id", h.getOpenVolunteerByID)
	api.POST("/volunteer/join/:id", h.userJoinVolunteer)
	api.GET("/volunteer/user-status/:id", h.getUserVolunteerStatus)

	h.http.GET("/campaign/all", h.getAllOpenCampaign)
	h.http.GET("/campaign/:id", h.getOpenCampaignByID)
	api.GET("/campaign/user-status/:id", h.getUserCampaignStatus)
	api.POST("/user/campaign/:id", h.userJoinCampaign)
}
