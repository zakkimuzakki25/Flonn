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

	h.http.GET("/disaster/all", h.getAllDisaster)
	h.http.GET("/disaster/years", h.getDisasterYears)
	h.http.GET("/disaster/filter", h.getDisastersByFilter)

	h.http.GET("/disaster-type/:id", h.getDisasterTypeDetail)

	h.http.GET("/biodiversity/filter", h.getBiodiversitiesByFilter)
}
