package repository

import "gorm.io/gorm"

type Repository struct {
	User             UserInterface
	KTP              KTPInteface
	Disaster         DisasterInterface
	DisasterType     DisasterTypeInterface
	Biodiversity     BiodiversityInterface
	Kingdom          KingdomInterface
	Habitat          HabitatInterface
	Status           StatusInterface
	Level            LevelInterface
	OpenDonation     OpenDonationInterface
	OpenVolunteer    OpenVolunteerInterface
	OpenCampaign     OpenCampaignInterface
	OpenCampaignTask OpenCampaignTaskInterface
	Merch            MerchInterface
	MerchPurchase    MerchPurchaseInterface
	Donation         DonationInterface
}

func Init(db *gorm.DB) *Repository {
	return &Repository{
		User:             UserRepoInit(db),
		KTP:              KTPRepoInit(db),
		Disaster:         DisasterRepoInit(db),
		DisasterType:     DisasterTypeRepoInit(db),
		Biodiversity:     BiodiversityRepoInit(db),
		Kingdom:          KingdomRepoInit(db),
		Habitat:          HabitatRepoInit(db),
		Status:           StatusRepoInit(db),
		Level:            LevelRepoInit(db),
		OpenDonation:     OpenDonationRepoInit(db),
		OpenVolunteer:    OpenVolunteerRepoInit(db),
		OpenCampaign:     OpenCampaignRepoInit(db),
		OpenCampaignTask: OpenCampaignTaskRepoInit(db),
		Merch:            MerchRepoInit(db),
		MerchPurchase:    MerchPurchaseRepoInit(db),
		Donation:         DonationRepoInit(db),
	}
}
