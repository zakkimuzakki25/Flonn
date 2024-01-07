package entity

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Firstname    string `json:"firstname" gorm:"type:VARCHAR(255);NOT NULL"`
	Lastname     string `json:"lastname" gorm:"type:VARCHAR(255);NOT NULL"`
	Username     string `json:"username" gorm:"type:VARCHAR(20);UNIQUE"`
	Email        string `json:"email" gorm:"type:VARCHAR(255);UNIQUE"`
	Password     string `json:"password" gorm:"type:VARCHAR(255);NOT NULL"`
	Birthdate    string `json:"birthdate" gorm:"default:null"`
	Domisili     string `json:"domisili" gorm:"type:VARCHAR(50);default:null"`
	ProfilePhoto string `json:"profile_photo" gorm:"default:null"`
	Deskripsi    string `json:"deskripsi" gorm:"type:VARCHAR(250);default:null"`
	NoWhatsapp   string `json:"no_whatsapp" gorm:"type:VARCHAR(250);default:null"`
	JenisKelamin string `json:"jenis_kelamin" gorm:"type:VARCHAR(250);default:null"`
	Points       int    `json:"points" gorm:"type:INT;default:0"`
	Volunteer    Volunteer
}

// Models
