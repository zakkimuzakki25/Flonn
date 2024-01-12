package repository

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

type DisasterTypeInterface interface {
	Create(disasterType *entity.DisasterType) error
	GetByID(id int) (*entity.DisasterType, error)
	GetAll() ([]*entity.DisasterType, error)
	Update(disasterType *entity.DisasterType) error
	Delete(id int) error
}

type disasterType struct {
	db *gorm.DB
}

func DisasterTypeRepoInit(db *gorm.DB) DisasterTypeInterface {
	return &disasterType{db: db}
}

func (d *disasterType) Create(disasterType *entity.DisasterType) error {
	if err := d.db.Create(disasterType).Error; err != nil {
		return err
	}
	return nil
}

func (d *disasterType) GetByID(id int) (*entity.DisasterType, error) {
	disasterType := &entity.DisasterType{}
	if err := d.db.First(disasterType, id).Error; err != nil {
		return nil, err
	}
	return disasterType, nil
}

func (d *disasterType) GetAll() ([]*entity.DisasterType, error) {
	var disasterTypes []*entity.DisasterType
	if err := d.db.Find(&disasterTypes).Error; err != nil {
		return nil, err
	}
	return disasterTypes, nil
}

func (d *disasterType) Update(disasterType *entity.DisasterType) error {
	if err := d.db.Save(disasterType).Error; err != nil {
		return err
	}
	return nil
}

func (d *disasterType) Delete(id int) error {
	if err := d.db.Delete(&entity.DisasterType{}, id).Error; err != nil {
		return err
	}
	return nil
}
