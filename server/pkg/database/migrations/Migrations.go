package migrations

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

func MigrateData(db *gorm.DB) {
	db.AutoMigrate(
		&entity.Status{},
		&entity.Level{},
		&entity.Merch{},
		&entity.MerchPurchase{},
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
		&entity.KTP{},
		&entity.Volunteer{},
		&entity.OpenVolunteer{},
		&entity.OpenCampaign{},
		&entity.OpenCampaignTask{},
		&entity.OpenCampaignParticipant{},
		&entity.Donation{},
		&entity.OpenDonation{},
	)
}
