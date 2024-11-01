package entity

import (
	"time"

	"github.com/golang-jwt/jwt/v4"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Firstname    string `json:"firstname" gorm:"type:VARCHAR(255);NOT NULL"`
	Lastname     string `json:"lastname" gorm:"type:VARCHAR(255);NOT NULL"`
	Email        string `json:"email" gorm:"type:VARCHAR(255);UNIQUE"`
	Password     string `json:"password" gorm:"type:VARCHAR(255);NOT NULL"`
	Birthdate    string `json:"birthdate" gorm:"default:null"`
	Domisili     string `json:"domisili" gorm:"type:VARCHAR(50);default:null"`
	Address      string `json:"address" gorm:"type:VARCHAR(255);default:null"`
	Photo        string `json:"photo" gorm:"default:null"`
	Deskripsi    string `json:"deskripsi" gorm:"type:VARCHAR(250);default:null"`
	NoTelp       string `json:"no_telepon" gorm:"type:VARCHAR(20);default:null"`
	JenisKelamin string `json:"jenis_kelamin" gorm:"type:VARCHAR(250);default:null"`
	Floint       int    `json:"floint" gorm:"type:INT;default:0"`
	FlointTotal  int    `json:"floint_total" gorm:"type:INT;default:0"`
	Level        int    `json:"level" gorm:"type:INT;default:0"`
}

// Models

type UserUpdateProfile struct {
	Firstname    string `json:"firstname" gorm:"type:VARCHAR(255);NOT NULL"`
	Lastname     string `json:"lastname" gorm:"type:VARCHAR(255);NOT NULL"`
	Birthdate    string `json:"birthdate" gorm:"default:null"`
	Address      string `json:"address" gorm:"type:VARCHAR(255);default:null"`
	JenisKelamin string `json:"jenis_kelamin" gorm:"type:VARCHAR(250);default:null"`
}

type UserFlointDetailResp struct {
	Fullname        string `json:"fullname"`
	Floint          int    `json:"floint"`
	FlointTotal     int    `json:"floint_total"`
	MaxFloint       int    `json:"max_floint"`
	MaxFlointBefore int    `json:"max_floint_before"`
	Level           int    `json:"level"`
	Tier            string `json:"tier"`
}

type UserRegister struct {
	Firstname string `json:"firstname" gorm:"NOT NULL" binding:"required"`
	Lastname  string `json:"lastname" gorm:"NOT NULL" binding:"required"`
	Email     string `json:"email" gorm:"NOT NULL" binding:"required,email"`
	Password  string `json:"password" gorm:"NOT NULL" binding:"required,min=8"`
}

type UserAuthGoogle struct {
	Firstname string `json:"firstname"`
	Lastname  string `json:"lastname"`
	Email     string `json:"email" gorm:"NOT NULL" binding:"required,email"`
	Photo     string `json:"photo"`
}

type UserLogin struct {
	Email    string `json:"email" gorm:"NOT NULL" binding:"required,email"`
	Password string `json:"password" gorm:"NOT NULL" binding:"required,min=8"`
}

type UserClaims struct {
	ID uint `json:"id"`
	jwt.RegisteredClaims
}

func NewUserClaims(id uint, exp time.Duration) UserClaims {
	return UserClaims{
		ID: id,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(exp)),
		},
	}
}
