package entity

type KTP struct {
	UserID uint   `json:"user_id" gorm:"primaryKey"`
	Link   string `json:"link" gorm:"not null"`
	Status string `json:"status" gorm:"not null;default:'pending'"`
}
