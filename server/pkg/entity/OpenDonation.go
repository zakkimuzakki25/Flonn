package entity

import "gorm.io/gorm"

type OpenDonation struct {
	gorm.Model
	Title       string  `json:"title"`
	Photo       string  `json:"photo"`
	Description string  `json:"description"`
	Total       float64 `json:"total" gorm:"default:0"`
	Target      float64 `json:"target"`
	IsDisaster  bool    `gorm:"default:false"`
	User        []User  `gorm:"many2many:donations"`
}

type OpenDonationResponse struct {
	ID          uint    `json:"id"`
	Title       string  `json:"title"`
	Photo       string  `json:"photo"`
	Description string  `json:"description"`
	Total       float64 `json:"total" gorm:"default:0"`
	Target      float64 `json:"target"`
	IsDisaster  bool    `gorm:"default:false"`
	TotalDonors int64   `json:"total_donors"`
}
