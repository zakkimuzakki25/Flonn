package entity

import (
	"time"

	"gorm.io/gorm"
)

type Merch struct {
	gorm.Model
	Title       string  `json:"title"`
	Description string  `json:"description"`
	Price       float64 `json:"price"`
	Floint      int     `json:"floint"`
	Stock       int     `json:"stock"`
	Photo       string  `json:"photo"`
	Rate        float64 `json:"rate"`
}

type MerchPurchase struct {
	gorm.Model
	MerchID      uint      `json:"merch_id"`
	UserID       uint      `json:"user_id"`
	AddressLabel string    `json:"address_label"`
	Address      string    `json:"address"`
	Name         string    `json:"name"`
	PhoneNumber  string    `json:"phone_number"`
	Date         time.Time `json:"date"`
	Quantity     int       `json:"quantity"`
	Floint       int       `json:"floint"`
	Status       string    `json:"status" gorm:"default:'diproses'"`
}

// models
type MerchPurchaseInput struct {
	MerchID      uint      `json:"merch_id"`
	AddressLabel string    `json:"address_label"`
	Address      string    `json:"address"`
	Name         string    `json:"name"`
	PhoneNumber  string    `json:"phone_number"`
	Date         time.Time `json:"date"`
	Quantity     int       `json:"quantity"`
	Floint       int       `json:"floint"`
	Status   string    `json:"status"`
}
