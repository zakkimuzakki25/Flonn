package repository

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

type HabitatInterface interface {
	Create(habitat *entity.Habitat) error
	GetByID(id int) (*entity.Habitat, error)
	GetAll() ([]*entity.Habitat, error)
	Update(habitat *entity.Habitat) error
	Delete(id int) error
}

type habitat struct {
	db *gorm.DB
}

func HabitatRepoInit(db *gorm.DB) HabitatInterface {
	return &habitat{db: db}
}

func (d *habitat) Create(habitat *entity.Habitat) error {
	if err := d.db.Create(habitat).Error; err != nil {
		return err
	}
	return nil
}

func (d *habitat) GetByID(id int) (*entity.Habitat, error) {
	habitat := &entity.Habitat{}
	if err := d.db.First(habitat, id).Error; err != nil {
		return nil, err
	}
	return habitat, nil
}

func (d *habitat) GetAll() ([]*entity.Habitat, error) {
	var habitats []*entity.Habitat
	if err := d.db.Find(&habitats).Error; err != nil {
		return nil, err
	}
	return habitats, nil
}

func (d *habitat) Update(habitat *entity.Habitat) error {
	if err := d.db.Save(habitat).Error; err != nil {
		return err
	}
	return nil
}

func (d *habitat) Delete(id int) error {
	if err := d.db.Delete(&entity.Habitat{}, id).Error; err != nil {
		return err
	}
	return nil
}
