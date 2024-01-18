package entity

import "gorm.io/gorm"

type OpenDonation struct {
	gorm.Model
	Title       string  `json:"title"`
	Description string  `json:"description"`
	Total       float64 `json:"total" gorm:"default:0"`
	IsDisaster  bool    `gorm:"default:false"`
	Photo       string  `json:"photo"`
	Donation    []Donation
}
