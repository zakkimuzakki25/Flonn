package entity

import "gorm.io/gorm"

type Donation struct {
	gorm.Model
	UserID         int     `json:"user_id"`
	OpenDonationID int     `json:"open_donation_id"`
	Status         string  `json:"status" gorm:"default:'diproses'"`
	Amount         float64 `json:"amount"`
	PaymentMethod  string  `json:"payment_method"`
}
