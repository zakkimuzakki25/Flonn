package repository

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

type OpenDonationInterface interface {
	Create(openDonation *entity.OpenDonation) error
	GetByID(id int) (*entity.OpenDonation, error)
	GetAll() ([]*entity.OpenDonation, error)
	Update(openDonation *entity.OpenDonation) error
	Delete(id int) error
	CountDonors(openDonationID int) (int64, error)
	SumDonations(openDonationID int) (float64, error)
}

type openDonation struct {
	db *gorm.DB
}

func OpenDonationRepoInit(db *gorm.DB) OpenDonationInterface {
	return &openDonation{db: db}
}

func (d *openDonation) Create(openDonation *entity.OpenDonation) error {
	if err := d.db.Create(openDonation).Error; err != nil {
		return err
	}
	return nil
}

func (d *openDonation) GetByID(id int) (*entity.OpenDonation, error) {
	openDonation := &entity.OpenDonation{}
	if err := d.db.First(openDonation, id).Error; err != nil {
		return nil, err
	}
	return openDonation, nil
}

func (d *openDonation) GetAll() ([]*entity.OpenDonation, error) {
	var openDonations []*entity.OpenDonation
	if err := d.db.Find(&openDonations).Error; err != nil {
		return nil, err
	}
	return openDonations, nil
}

func (d *openDonation) Update(openDonation *entity.OpenDonation) error {
	if err := d.db.Save(openDonation).Error; err != nil {
		return err
	}
	return nil
}

func (d *openDonation) Delete(id int) error {
	if err := d.db.Delete(&entity.OpenDonation{}, id).Error; err != nil {
		return err
	}
	return nil
}

func (d *openDonation) CountDonors(openDonationID int) (int64, error) {
	var count int64
	err := d.db.Model(&entity.Donation{}).
		Where("open_donation_id = ?", openDonationID).
		Count(&count).Error
	if err != nil {
		return 0, nil
	}
	return count, nil
}

func (d *openDonation) SumDonations(openDonationID int) (float64, error) {
	var sum float64
	err := d.db.Model(&entity.Donation{}).
		Where("open_donation_id = ?", openDonationID).
		Select("SUM(amount)").
		Scan(&sum).
		Error

	if err != nil {
		return 0, nil
	}
	return sum, nil
}
