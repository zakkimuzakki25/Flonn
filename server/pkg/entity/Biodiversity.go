package entity

import "gorm.io/gorm"

type Biodiversity struct {
	gorm.Model
	Name        string `json:"name" gorm:"type:VARCHAR(255);NOT NULL"`
	Description string `json:"description" gorm:"type:VARCHAR(255);default:null"`
	Behavior    string `json:"behavior" gorm:"type:VARCHAR(255);default:null"`
	Habitat     string `json:"habitat" gorm:"type:VARCHAR(255);default:null"`
	Status      string `json:"status" gorm:"type:VARCHAR(255);default:null"`
	Coordinate  []BiodiversityCoordinate
	SpeciesID   int
}

type BiodiversityCoordinate struct {
	ID             int `json:"id" gorm:"type:INT;NOT NULL;AUTO_INCREMENT;PRIMARY_KEY"`
	BiodiversityID int
	Latitude       float64 `json:"latitude"`
	Longitude      float64 `json:"longitude"`
}
