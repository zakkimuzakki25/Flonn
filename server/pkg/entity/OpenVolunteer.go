package entity

import (
	"time"

	"gorm.io/gorm"
)

type OpenVolunteer struct {
	gorm.Model
	Title       string    `json:"title"`
	Subtitle    string    `json:"subtitle"`
	Photo       string    `json:"photo"`
	Description string    `json:"description"`
	StartDate   time.Time `json:"start_date"`
	EndDate     time.Time `json:"end_date"`
	Tasks       string    `json:"tasks"`
	Condition   string    `json:"condition"`
	User        []User    `gorm:"many2many:volunteers"`
}
