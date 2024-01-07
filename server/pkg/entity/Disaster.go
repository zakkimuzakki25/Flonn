package entity

import "gorm.io/gorm"

type Disaster struct {
	gorm.Model
	DisasterTypeID int
	Location       string  `gorm:"type:VARCHAR(255);NOT NULL"`
	Description    string  `gorm:"type:VARCHAR(255);default:null"`
	MonetaryLoss   float64 `json:"monetary_loss" gorm:"type:DOUBLE;default:null"`
	BuildingDamage int     `json:"building_damage" gorm:"type:INTEGER;default:null"`
	Deaths         int     `json:"deaths" gorm:"type:INTEGER;default:null"`
	Injured        int     `json:"injured" gorm:"type:INTEGER;default:null"`
	Missing        int     `json:"missing" gorm:"type:INTEGER;default:null"`
	Evacuated      int     `json:"evacuated" gorm:"type:INTEGER;default:null"`
	Latitude       float64 `json:"latitude"`
	Longitude      float64 `json:"longitude"`
}
