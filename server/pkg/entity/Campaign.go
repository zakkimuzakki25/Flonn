package entity

type Campaign struct {
	UserID         int    `gorm:"primaryKey"`
	OpenCampaignID int    `gorm:"primaryKey"`
	Status         string `json:"status" gorm:"default:'dalam proses verifikasi'"`
}
