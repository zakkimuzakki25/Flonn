package repository

import "gorm.io/gorm"

type UserInterface interface {
}

type user struct {
}

func UserRepoInit(db *gorm.DB) UserInterface {
	return nil
}
