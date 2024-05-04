package entity

import "gorm.io/gorm"

type Donation struct {
	gorm.Model
	Amount         float64 `json:"amount"`
	Status         string  `json:"status" gorm:"type:VARCHAR(255), default:'diproses'"`
	UserID         int     `gorm:"primaryKey"`
	OpenDonationID int     `gorm:"primaryKey"`
}
