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
	// admin := h.http.Group("/admin")

	api.Use(middleware.JwtMiddleware(h.help))
	// admin.Use(middleware.JwtMiddlewareAdmin(h.help))

	h.http.GET("/disaster", h.getAllDisaster)

	// h.http.POST("/admin/login", h.adminLogin)
	// admin.GET("verif/toko", h.getAllUnverifiedToko)
	// admin.GET("verif/produk", h.getAllUnverifiedProduct)
	// admin.PUT("verif/toko/:id", h.setVerifToko)
	// admin.PUT("verif/produk/:id", h.setVerifProduk)

	// h.http.POST("/user/register", h.userRegister)
	// h.http.POST("/user/login", h.userLogin)

	// api.GET("/profile", h.userGetProfile)
	// api.GET("/navbar", h.userGetNavbar)
	// api.GET("/user/profile", h.userGetProfile)
	// api.PUT("/user/profile/update", h.userUpdateProfile)
	// api.PUT("/user/profile/update/photo", h.userUpdatePhotoProfile)
	// api.GET("/user/toko", h.getMyToko)
	// api.POST("/user/toko/regis", h.tokoRegistrasi)
	// api.POST("/user/toko/create-product", h.createProduct)

	// api.GET("/product/:category", h.getProductByCategory)
}
