package entity

import (
	"time"

	"github.com/golang-jwt/jwt/v4"
)

type AdminLogin struct {
	Key      string `json:"key" gorm:"NOT NULL"`
	Password string `json:"password" gorm:"NOT NULL"`
}

type AdminClaims struct {
	Key string `json:"key"`
	jwt.RegisteredClaims
}

func NewAdminClaims(key string, exp time.Duration) AdminClaims {
	return AdminClaims{
		Key: key,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(exp)),
		},
	}
}
