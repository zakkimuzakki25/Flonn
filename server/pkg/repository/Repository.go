package repository

import "gorm.io/gorm"

type Repository struct {
	User          UserInterface
	KTP           KTPInteface
	Disaster      DisasterInterface
	DisasterType  DisasterTypeInterface
	Biodiversity  BiodiversityInterface
	Kingdom       KingdomInterface
	Habitat       HabitatInterface
	Status        StatusInterface
	OpenDonation  OpenDonationInterface
	OpenVolunteer OpenVolunteerInterface
	OpenCampaign  OpenCampaignInterface
	OpenCampaignTask  OpenCampaignTaskInterface
	Merch         MerchInterface
	Donation      DonationInterface
}

func Init(db *gorm.DB) *Repository {
	return &Repository{
		User:          UserRepoInit(db),
		KTP:           KTPRepoInit(db),
		Disaster:      DisasterRepoInit(db),
		DisasterType:  DisasterTypeRepoInit(db),
		Biodiversity:  BiodiversityRepoInit(db),
		Kingdom:       KingdomRepoInit(db),
		Habitat:       HabitatRepoInit(db),
		Status:        StatusRepoInit(db),
		OpenDonation:  OpenDonationRepoInit(db),
		OpenVolunteer: OpenVolunteerRepoInit(db),
		OpenCampaign:  OpenCampaignRepoInit(db),
		OpenCampaignTask:  OpenCampaignTaskRepoInit(db),
		Merch:         MerchRepoInit(db),
		Donation:      DonationRepoInit(db),
	}
}
