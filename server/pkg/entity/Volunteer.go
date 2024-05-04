package entity

import "gorm.io/gorm"

type Volunteer struct {
	gorm.Model
	Status          string `json:"status" gorm:"default:'dalam proses verifikasi'"`
	UserID          int    `gorm:"primaryKey"`
	OpenVolunteerID int    `gorm:"primaryKey"`
}
