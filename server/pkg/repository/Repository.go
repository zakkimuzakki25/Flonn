package repository

import "gorm.io/gorm"

type Repository struct {
	User         UserInterface
	Disaster     DisasterInterface
	DisasterType DisasterTypeInterface
	Biodiversity BiodiversityInterface
	Kingdom      KingdomInterface
	Habitat      HabitatInterface
	Status       StatusInterface
}

func Init(db *gorm.DB) *Repository {
	return &Repository{
		User:         UserRepoInit(db),
		Disaster:     DisasterRepoInit(db),
		DisasterType: DisasterTypeRepoInit(db),
		Biodiversity: BiodiversityRepoInit(db),
		Kingdom:      KingdomRepoInit(db),
		Habitat:      HabitatRepoInit(db),
		Status:       StatusRepoInit(db),
	}
}
