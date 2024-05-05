package entity

import "gorm.io/gorm"

type OpenCampaign struct {
	gorm.Model
	Title       string `json:"title"`
	Photo       string `json:"photo"`
	Highlight   string `json:"highlight"`
	Description string `json:"description"`
	Keterangan  string `json:"keterangan"`
	Steps       string `json:"steps"`
	IsPositive  bool   `json:"is_positive"`
}
