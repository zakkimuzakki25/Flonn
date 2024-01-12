package repository

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

type BiodiversityInterface interface {
	Create(biodiversitas *entity.Biodiversity) error
	GetByID(id int) (*entity.Biodiversity, error)
	GetAll() ([]*entity.Biodiversity, error)
	GetByFilter(filter entity.FilterBiodiversity) ([]*entity.Biodiversity, error)
	Update(biodiversitas *entity.Biodiversity) error
	Delete(id int) error
}

type biodiversity struct {
	db *gorm.DB
}

func BiodiversityRepoInit(db *gorm.DB) BiodiversityInterface {
	return &biodiversity{db: db}
}

func (d *biodiversity) Create(biodiversity *entity.Biodiversity) error {
	if err := d.db.Create(biodiversity).Error; err != nil {
		return err
	}
	return nil
}

func (d *biodiversity) GetByID(id int) (*entity.Biodiversity, error) {
	biodiversity := &entity.Biodiversity{}
	if err := d.db.First(biodiversity, id).Error; err != nil {
		return nil, err
	}
	return biodiversity, nil
}

func (d *biodiversity) GetByFilter(filter entity.FilterBiodiversity) ([]*entity.Biodiversity, error) {
	var biodiversities []*entity.Biodiversity
	if err := d.db.Joins("JOIN species ON biodiversities.species_id = species.id").
		Joins("JOIN genus ON species.genus_id = genus.id").
		Joins("JOIN familia ON genus.familia_id = familia.id").
		Joins("JOIN ordos ON familia.ordo_id = ordos.id").
		Joins("JOIN classes ON ordos.classis_id = classes.id").
		Joins("JOIN kingdoms ON classes.kingdom_id = kingdoms.id").
		Where("biodiversities.status_id LIKE ? AND biodiversities.habitat_id LIKE ? AND kingdoms.id LIKE ? AND biodiversities.name LIKE ?", "%"+filter.StatusID+"%", "%"+filter.HabitatID+"%", "%"+filter.KingdomID+"%", "%"+filter.Name+"%").
		Find(&biodiversities).Error; err != nil {
		return nil, err
	}
	return biodiversities, nil
}

func (d *biodiversity) GetAll() ([]*entity.Biodiversity, error) {
	var biodiversities []*entity.Biodiversity
	if err := d.db.Find(&biodiversities).Error; err != nil {
		return nil, err
	}
	return biodiversities, nil
}

func (d *biodiversity) Update(biodiversity *entity.Biodiversity) error {
	if err := d.db.Save(biodiversity).Error; err != nil {
		return err
	}
	return nil
}

func (d *biodiversity) Delete(id int) error {
	if err := d.db.Delete(&entity.Biodiversity{}, id).Error; err != nil {
		return err
	}
	return nil
}
