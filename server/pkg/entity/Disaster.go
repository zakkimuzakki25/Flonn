package entity

import (
	"time"

	"gorm.io/gorm"
)

type Disaster struct {
	gorm.Model
	DisasterTypeID int
	Location       string    `json:"location" gorm:"type:VARCHAR(255);NOT NULL"`
	Province       string    `json:"province" gorm:"type:VARCHAR(100)"`
	Photo          string    `json:"photo"`
	Description    string    `json:"description" gorm:"type:VARCHAR(255);default:null"`
	Date           time.Time `json:"date"`
	MonetaryLoss   float64   `json:"monetary_loss" gorm:"type:DOUBLE;default:null"`
	BuildingDamage int       `json:"building_damage" gorm:"type:INTEGER;default:null"`
	Deaths         int       `json:"deaths" gorm:"type:INTEGER;default:null"`
	Injured        int       `json:"injured" gorm:"type:INTEGER;default:null"`
	Missing        int       `json:"missing" gorm:"type:INTEGER;default:null"`
	Evacuated      int       `json:"evacuated" gorm:"type:INTEGER;default:null"`
	Latitude       float64   `json:"latitude"`
	Longitude      float64   `json:"longitude"`
}

// models
type FilterDisaster struct {
	Month string `form:"month"`
	Year  string `form:"year"`
}

type DisasterResponse struct {
	ID             int       `json:"id"`
	DisasterType   string    `json:"disaster_type"`
	Location       string    `json:"location" gorm:"type:VARCHAR(255);NOT NULL"`
	Province       string    `json:"province" gorm:"type:VARCHAR(100)"`
	Photo          string    `json:"photo"`
	Description    string    `json:"description" gorm:"type:VARCHAR(255);default:null"`
	Date           time.Time `json:"date"`
	MonetaryLoss   float64   `json:"monetary_loss" gorm:"type:DOUBLE;default:null"`
	BuildingDamage int       `json:"building_damage" gorm:"type:INTEGER;default:null"`
	Deaths         int       `json:"deaths" gorm:"type:INTEGER;default:null"`
	Injured        int       `json:"injured" gorm:"type:INTEGER;default:null"`
	Missing        int       `json:"missing" gorm:"type:INTEGER;default:null"`
	Evacuated      int       `json:"evacuated" gorm:"type:INTEGER;default:null"`
	Latitude       float64   `json:"latitude"`
	Longitude      float64   `json:"longitude"`
}
