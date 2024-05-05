package entity

type Volunteer struct {
	UserID          int    `gorm:"primaryKey"`
	OpenVolunteerID int    `gorm:"primaryKey"`
	Status          string `json:"status" gorm:"default:'dalam proses verifikasi'"`
}
