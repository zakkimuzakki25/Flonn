package entity

import "gorm.io/gorm"

type Campaign struct {
	gorm.Model
	Status         string `json:"status" gorm:"default:'dalam proses verifikasi'"`
	UserID         int    `gorm:"primaryKey"`
	OpenCampaignID int    `gorm:"primaryKey"`
}
