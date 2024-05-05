package entity

import "gorm.io/gorm"

type Biodiversity struct {
	gorm.Model
	Name            string  `json:"name" gorm:"type:VARCHAR(255);NOT NULL"`
	LatinName       string  `json:"latin_name" gorm:"type:VARCHAR(255);NOT NULL"`
	Populasi        string  `json:"populasi"`
	BeratBadan      string  `json:"berat_badan"`
	UkuranTubuh     string  `json:"ukuran_tubuh"`
	RentangUsia     string  `json:"rentang_usia"`
	Description     string  `json:"description"`
	Characteristics string  `json:"characteristics"`
	Status          string  `json:"status"`
	Photo           string  `json:"photo"`
	Latitude        float64 `json:"latitude"`
	Longitude       float64 `json:"longitude"`
	StatusID        int
	HabitatID       int
	SpeciesID       int
}

type BiodiversityCoordinate struct {
	ID             int `json:"id" gorm:"type:INT;NOT NULL;AUTO_INCREMENT;PRIMARY_KEY"`
	BiodiversityID int
	Latitude       float64 `json:"latitude"`
	Longitude      float64 `json:"longitude"`
}

type FilterBiodiversity struct {
	Name      string `form:"name"`
	KingdomID string `form:"kingdom"`
	HabitatID string `form:"habitat"`
	StatusID  string `form:"status"`
}

type BiodiversityResponse struct {
	ID                 int     `json:"id"`
	Name               string  `json:"name" gorm:"type:VARCHAR(255);NOT NULL"`
	LatinName          string  `json:"latin_name" gorm:"type:VARCHAR(255);NOT NULL"`
	Populasi           string  `json:"populasi"`
	BeratBadan         string  `json:"berat_badan"`
	UkuranTubuh        string  `json:"ukuran_tubuh"`
	RentangUsia        string  `json:"rentang_usia"`
	Description        string  `json:"description" gorm:"type:VARCHAR(255);default:null"`
	Characteristics    string  `json:"characteristics" gorm:"type:VARCHAR(255);default:null"`
	Behavior           string  `json:"behavior" gorm:"type:VARCHAR(255);default:null"`
	Status             string  `json:"status"`
	StatusID           string  `json:"status_id"`
	StatusDescription  string  `json:"status_description"`
	Habitat            string  `json:"habitat"`
	HabitatDescription string  `json:"habitat_description"`
	Kingdom            string  `json:"kingdom"`
	Phylum             string  `json:"phylum"`
	Diovisio           string  `json:"diovisio"`
	Classis            string  `json:"classis"`
	Familia            string  `json:"familia"`
	Ordo               string  `json:"ordo"`
	Genus              string  `json:"genus"`
	Species            string  `json:"species"`
	Photo              string  `json:"photo"`
	Latitude           float64 `json:"latitude"`
	Longitude          float64 `json:"longitude"`
}
