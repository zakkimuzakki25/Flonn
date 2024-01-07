package entity

import "gorm.io/gorm"

type Donation struct {
	gorm.Model
	UserID int
	Amount float64 `gorm:"type:DOUBLE;NOT NULL"`
	Status string  `gorm:"type:VARCHAR(255);NOT NULL"`
}
