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
		&entity.Kingdom{},
		&entity.Diovisio{},
		&entity.Phylum{},
		&entity.Classis{},
		&entity.Ordo{},
		&entity.Familia{},
		&entity.Genus{},
		&entity.Species{},
		&entity.Biodiversity{},
		&entity.User{},
		&entity.Volunteer{},
		&entity.OpenVolunteer{},
		&entity.Campaign{},
		&entity.OpenCampaign{},
		&entity.Donation{},
		&entity.OpenDonation{},
		&entity.BiodiversityCoordinate{},
	)
}
