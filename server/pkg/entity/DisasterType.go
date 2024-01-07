package entity

import "gorm.io/gorm"

type DisasterType struct {
	gorm.Model
	Name     string `gorm:"type:VARCHAR(255);NOT NULL"`
	Disaster []Disaster
}
