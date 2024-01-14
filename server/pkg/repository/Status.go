package repository

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

type StatusInterface interface {
	Create(status *entity.Status) error
	GetByID(id int) (*entity.Status, error)
	GetAll() ([]*entity.Status, error)
	Update(status *entity.Status) error
	Delete(id int) error
}

type status struct {
	db *gorm.DB
}

func StatusRepoInit(db *gorm.DB) StatusInterface {
	return &status{db: db}
}

func (d *status) Create(status *entity.Status) error {
	if err := d.db.Create(status).Error; err != nil {
		return err
	}
	return nil
}

func (d *status) GetByID(id int) (*entity.Status, error) {
	status := &entity.Status{}
	if err := d.db.First(status, id).Error; err != nil {
		return nil, err
	}
	return status, nil
}

func (d *status) GetAll() ([]*entity.Status, error) {
	var statuss []*entity.Status
	if err := d.db.Find(&statuss).Error; err != nil {
		return nil, err
	}
	return statuss, nil
}

func (d *status) Update(status *entity.Status) error {
	if err := d.db.Save(status).Error; err != nil {
		return err
	}
	return nil
}

func (d *status) Delete(id int) error {
	if err := d.db.Delete(&entity.Status{}, id).Error; err != nil {
		return err
	}
	return nil
}
