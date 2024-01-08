package migrations

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

func MigrateData(db *gorm.DB) {
	db.AutoMigrate(
		&entity.User{},
		&entity.Volunteer{},
		&entity.DisasterType{},
		&entity.Disaster{},
		&entity.Donation{},
		&entity.Kingdom{},
		&entity.Diovisio{},
		&entity.Phylum{},
		&entity.Classis{},
		&entity.Ordo{},
		&entity.Familia{},
		&entity.Genus{},
		&entity.Species{},
		&entity.Biodiversity{},
		&entity.BiodiversityCoordinate{},
	)
}
