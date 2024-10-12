package repository

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

type UserInterface interface {
	Create(user *entity.User) (*entity.User, error)
	GetByID(id int) (*entity.User, error)
	GetByEmail(email string) (*entity.User, error)
	GetAll() ([]*entity.User, error)
	Update(user *entity.User) error
	Delete(id int) error
	GetUserCampaignStatus(id uint, campaignID int) (string, error)
	GetUserVolunteerStatus(id uint, volunteerID int) (string, error)
	UserJoinVolunteer(id uint, volunteerID uint) error
	GetVolunteerHistory(id uint) ([]*entity.Volunteer, error)
	GetDonationHistory(id uint) ([]*entity.Donation, error)
	UserJoinCampaign(id uint, campaignID uint, photo string) error
	UserUpdateCampaign(id uint, campaignID uint, photo string) error
}

type user struct {
	db *gorm.DB
}

func UserRepoInit(db *gorm.DB) UserInterface {
	return &user{db: db}
}

func (d *user) Create(user *entity.User) (*entity.User, error) {
	if err := d.db.Create(user).Error; err != nil {
		return nil, err
	}
	return user, nil
}

func (d *user) GetByID(id int) (*entity.User, error) {
	user := &entity.User{}
	if err := d.db.First(user, id).Error; err != nil {
		return nil, err
	}
	return user, nil
}

func (d *user) GetByEmail(email string) (*entity.User, error) {
	user := &entity.User{}
	if err := d.db.Where("email = ?", email).First(&user).Error; err != nil {
		return nil, err
	}
	return user, nil
}

func (d *user) GetAll() ([]*entity.User, error) {
	var user []*entity.User
	if err := d.db.Find(&user).Error; err != nil {
		return nil, err
	}
	return user, nil
}

func (d *user) Update(user *entity.User) error {
	if err := d.db.Save(user).Error; err != nil {
		return err
	}
	return nil
}

func (d *user) Delete(id int) error {
	if err := d.db.Delete(&entity.User{}, id).Error; err != nil {
		return err
	}
	return nil
}

func (d *user) GetUserCampaignStatus(userID uint, campaignID int) (string, error) {
	var participation struct {
		Status string
	}

	err := d.db.Table("open_campaign_participants").
		Select("status").
		Where("user_id = ? AND open_campaign_task_id = ?", userID, campaignID).
		Scan(&participation).Error

	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return "tidak terdaftar", nil
		}
		return "", err
	}

	return participation.Status, nil
}

func (d *user) GetUserVolunteerStatus(userID uint, volunteerID int) (string, error) {
	var participation struct {
		Status string
	}

	err := d.db.Table("volunteers").
		Select("status").
		Where("user_id = ? AND open_volunteer_id = ?", userID, volunteerID).
		Scan(&participation).Error

	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return "tidak terdaftar", nil
		}
		return "", err
	}

	return participation.Status, nil
}

func (d *user) UserJoinVolunteer(userID uint, volunteerID uint) error {
	newVolunteer := &entity.Volunteer{
		UserID:          userID,
		OpenVolunteerID: volunteerID,
		Status:          "pending",
	}

	err := d.db.Create(&newVolunteer).Error
	if err != nil {
		return err
	}
	return nil
}

func (d *user) GetVolunteerHistory(userID uint) ([]*entity.Volunteer, error) {
	var volunteers []*entity.Volunteer
	err := d.db.Where("user_id = ?", userID).Find(&volunteers).Error
	if err != nil {
		return nil, err
	}
	return volunteers, nil
}

func (d *user) GetDonationHistory(userID uint) ([]*entity.Donation, error) {
	var donations []*entity.Donation
	err := d.db.Where("user_id = ?", userID).Find(&donations).Error
	if err != nil {
		return nil, err
	}
	return donations, nil
}

func (d *user) UserJoinCampaign(userID uint, campaignTaskID uint, photo string) error {
	newCampaign := &entity.OpenCampaignParticipant{
		UserID:             userID,
		OpenCampaignTaskID: campaignTaskID,
		Status:             "pending",
		Photo:              photo,
	}

	err := d.db.Create(&newCampaign).Error
	if err != nil {
		return err
	}
	return nil
}

func (d *user) UserUpdateCampaign(userID uint, campaignTaskID uint, photo string) error {
	campaign := &entity.OpenCampaignParticipant{}
	err := d.db.Where("user_id = ? AND open_campaign_task_id = ?", userID, campaignTaskID).First(&campaign).Error
	if err != nil {
		return err
	}

	campaign.Photo = photo
	campaign.Status = "pending"
	err = d.db.Save(&campaign).Error
	if err != nil {
		return err
	}
	return nil
}
