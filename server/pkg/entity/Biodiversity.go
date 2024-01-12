package entity

import "gorm.io/gorm"

type Biodiversity struct {
	gorm.Model
	Name        string `json:"name" gorm:"type:VARCHAR(255);NOT NULL"`
	LatinName   string `json:"latin_name" gorm:"type:VARCHAR(255);NOT NULL"`
	Description string `json:"description" gorm:"type:VARCHAR(255);default:null"`
	Behavior    string `json:"behavior" gorm:"type:VARCHAR(255);default:null"`
	Coordinate  []BiodiversityCoordinate
	StatusID    int
	HabitatID   int
	SpeciesID   int
}

type BiodiversityCoordinate struct {
	ID             int `json:"id" gorm:"type:INT;NOT NULL;AUTO_INCREMENT;PRIMARY_KEY"`
	BiodiversityID int
	Latitude       float64 `json:"latitude"`
	Longitude      float64 `json:"longitude"`
}

type FilterBiodiversity struct {
	Name      string `uri:"name"`
	KingdomID string `uri:"kingdom_id"`
	HabitatID string `uri:"habitat_id"`
	StatusID  string `uri:"status_id"`
}

type BiodiversityResponse struct {
	gorm.Model
	Name        string   `json:"name" gorm:"type:VARCHAR(255);NOT NULL"`
	LatinName   string   `json:"latin_name" gorm:"type:VARCHAR(255);NOT NULL"`
	Description string   `json:"description" gorm:"type:VARCHAR(255);default:null"`
	Behavior    string   `json:"behavior" gorm:"type:VARCHAR(255);default:null"`
	Status      string   `json:"status"`
	Habitat     string   `json:"habitat"`
	Kingdom     string   `json:"kingdom"`
	Phylum      string   `json:"phylum"`
	Diovisio    string   `json:"diovisio"`
	Classis     string   `json:"classis"`
	Familia     string   `json:"familia"`
	Ordo        string   `json:"ordo"`
	Genus       string   `json:"genus"`
	Species     string   `json:"species"`
	Pictures    []string `json:"pictures"`
}
