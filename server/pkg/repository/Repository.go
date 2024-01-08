package repository

import "gorm.io/gorm"

type Repository struct {
	User     UserInterface
	Disaster DisasterInterface
}

func Init(db *gorm.DB) *Repository {
	return &Repository{
		User:     UserRepoInit(db),
		Disaster: DisasterRepoInit(db),
	}
}
