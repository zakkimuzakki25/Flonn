package repository

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

type OpenVolunteerInterface interface {
	Create(openVolunteer *entity.OpenVolunteer) error
	GetByID(id int) (*entity.OpenVolunteer, error)
	GetAll() ([]*entity.OpenVolunteer, error)
	Update(openVolunteer *entity.OpenVolunteer) error
	Delete(id int) error
}

type openVolunteer struct {
	db *gorm.DB
}

func OpenVolunteerRepoInit(db *gorm.DB) OpenVolunteerInterface {
	return &openVolunteer{db: db}
}

func (d *openVolunteer) Create(openVolunteer *entity.OpenVolunteer) error {
	if err := d.db.Create(openVolunteer).Error; err != nil {
		return err
	}
	return nil
}

func (d *openVolunteer) GetByID(id int) (*entity.OpenVolunteer, error) {
	openVolunteer := &entity.OpenVolunteer{}
	if err := d.db.First(openVolunteer, id).Error; err != nil {
		return nil, err
	}
	return openVolunteer, nil
}

func (d *openVolunteer) GetAll() ([]*entity.OpenVolunteer, error) {
	var openVolunteers []*entity.OpenVolunteer
	if err := d.db.Find(&openVolunteers).Error; err != nil {
		return nil, err
	}
	return openVolunteers, nil
}

func (d *openVolunteer) Update(openVolunteer *entity.OpenVolunteer) error {
	if err := d.db.Save(openVolunteer).Error; err != nil {
		return err
	}
	return nil
}

func (d *openVolunteer) Delete(id int) error {
	if err := d.db.Delete(&entity.OpenVolunteer{}, id).Error; err != nil {
		return err
	}
	return nil
}
