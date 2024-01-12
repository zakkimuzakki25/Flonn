package repository

import "gorm.io/gorm"

type Repository struct {
	User         UserInterface
	Disaster     DisasterInterface
	DisasterType DisasterTypeInterface
	Biodiversity BiodiversityInterface
}

func Init(db *gorm.DB) *Repository {
	return &Repository{
		User:         UserRepoInit(db),
		Disaster:     DisasterRepoInit(db),
		DisasterType: DisasterTypeRepoInit(db),
		Biodiversity: BiodiversityRepoInit(db),
	}
}
