package entity

type Level struct {
	Level     int    `json:"level"`
	Tier      string `json:"tier" gorm:"not null"`
	MaxFloint int    `json:"max_floint" gorm:"not null"`
}
