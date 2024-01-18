package entity

import "gorm.io/gorm"

type Donation struct {
	gorm.Model
	Amount         float64 `json:"amount"`
	Photo          string  `json:"photo"`
	Status         string  `json:"status" gorm:"type:VARCHAR(255), default:'diproses'"`
	UserID         int
	OpenDonationID int
}
