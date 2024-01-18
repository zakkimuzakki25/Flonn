package entity

import "gorm.io/gorm"

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
