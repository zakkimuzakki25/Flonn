package repository

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

type MerchInterface interface {
	Create(merch *entity.Merch) error
	GetByID(id int) (*entity.Merch, error)
	GetAll() ([]*entity.Merch, error)
	Update(merch *entity.Merch) error
	Delete(id int) error
}

type merch struct {
	db *gorm.DB
}

func MerchRepoInit(db *gorm.DB) MerchInterface {
	return &merch{db: db}
}

func (d *merch) Create(merch *entity.Merch) error {
	if err := d.db.Create(merch).Error; err != nil {
		return err
	}
	return nil
}

func (d *merch) GetByID(id int) (*entity.Merch, error) {
	merch := &entity.Merch{}
	if err := d.db.First(merch, id).Error; err != nil {
		return nil, err
	}
	return merch, nil
}

func (d *merch) GetAll() ([]*entity.Merch, error) {
	var merchs []*entity.Merch
	if err := d.db.Find(&merchs).Error; err != nil {
		return nil, err
	}
	return merchs, nil
}

func (d *merch) Update(merch *entity.Merch) error {
	if err := d.db.Save(merch).Error; err != nil {
		return err
	}
	return nil
}

func (d *merch) Delete(id int) error {
	if err := d.db.Delete(&entity.Merch{}, id).Error; err != nil {
		return err
	}
	return nil
}
