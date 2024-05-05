package repository

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

type DonationInterface interface {
	Create(user *entity.Donation) (*entity.Donation, error)
	GetByID(id int) (*entity.Donation, error)
	GetAll() ([]*entity.Donation, error)
	Update(donation *entity.Donation) error
	Delete(id int) error
}

type Donation struct {
	db *gorm.DB
}

func DonationRepoInit(db *gorm.DB) DonationInterface {
	return &Donation{db: db}
}

func (d *Donation) Create(donation *entity.Donation) (*entity.Donation, error) {
	if err := d.db.Create(donation).Error; err != nil {
		return nil, err
	}
	return donation, nil
}

func (d *Donation) GetByID(id int) (*entity.Donation, error) {
	donation := &entity.Donation{}
	if err := d.db.First(donation, id).Error; err != nil {
		return nil, err
	}
	return donation, nil
}

func (d *Donation) GetAll() ([]*entity.Donation, error) {
	var donations []*entity.Donation
	if err := d.db.Find(&donations).Error; err != nil {
		return nil, err
	}
	return donations, nil
}

func (d *Donation) Update(donation *entity.Donation) error {
	if err := d.db.Save(donation).Error; err != nil {
		return err
	}
	return nil
}

func (d *Donation) Delete(id int) error {
	if err := d.db.Delete(&entity.Donation{}, id).Error; err != nil {
		return err
	}
	return nil
}
