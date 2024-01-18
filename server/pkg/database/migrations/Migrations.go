package migrations

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

func MigrateData(db *gorm.DB) {
	db.AutoMigrate(
		&entity.Status{},
		&entity.Merch{},
		&entity.Habitat{},
		&entity.DisasterType{},
		&entity.Disaster{},
		&entity.OpenDonation{},
		&entity.Kingdom{},
		&entity.Diovisio{},
		&entity.Phylum{},
		&entity.Classis{},
		&entity.Ordo{},
		&entity.Familia{},
		&entity.Genus{},
		&entity.Species{},
		&entity.User{},
		&entity.Volunteer{},
		&entity.Biodiversity{},
		&entity.BiodiversityCoordinate{},
		&entity.Donation{},
	)
}
