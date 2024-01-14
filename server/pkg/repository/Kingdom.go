package repository

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

type KingdomInterface interface {
	Create(kingdom *entity.Kingdom) error
	GetByID(id int) (*entity.Kingdom, error)
	GetAll() ([]*entity.Kingdom, error)
	Update(kingdom *entity.Kingdom) error
	Delete(id int) error
}

type kingdom struct {
	db *gorm.DB
}

func KingdomRepoInit(db *gorm.DB) KingdomInterface {
	return &kingdom{db: db}
}

func (d *kingdom) Create(kingdom *entity.Kingdom) error {
	if err := d.db.Create(kingdom).Error; err != nil {
		return err
	}
	return nil
}

func (d *kingdom) GetByID(id int) (*entity.Kingdom, error) {
	kingdom := &entity.Kingdom{}
	if err := d.db.First(kingdom, id).Error; err != nil {
		return nil, err
	}
	return kingdom, nil
}

func (d *kingdom) GetAll() ([]*entity.Kingdom, error) {
	var kingdoms []*entity.Kingdom
	if err := d.db.Find(&kingdoms).Error; err != nil {
		return nil, err
	}
	return kingdoms, nil
}

func (d *kingdom) Update(kingdom *entity.Kingdom) error {
	if err := d.db.Save(kingdom).Error; err != nil {
		return err
	}
	return nil
}

func (d *kingdom) Delete(id int) error {
	if err := d.db.Delete(&entity.Kingdom{}, id).Error; err != nil {
		return err
	}
	return nil
}
