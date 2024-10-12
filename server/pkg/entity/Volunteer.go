package entity

import "gorm.io/gorm"

type Volunteer struct {
	gorm.Model
	UserID          uint   `gorm:"primaryKey"`
	OpenVolunteerID uint   `gorm:"primaryKey"`
	Status          string `json:"status" gorm:"default:'pending'"`
}
