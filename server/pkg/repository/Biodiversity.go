package repository

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

type BiodiversityInterface interface {
	Create(biodiversitas *entity.Biodiversity) error
	GetByID(id int) (*entity.BiodiversityResponse, error)
	GetAll() ([]*entity.BiodiversityResponse, error)
	GetByFilter(filter entity.FilterBiodiversity) ([]*entity.BiodiversityResponse, error)
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

func (d *biodiversity) GetByID(id int) (*entity.BiodiversityResponse, error) {
	biodiversityResponse := &entity.BiodiversityResponse{}
	if err := d.db.Table("biodiversities").
		Select("biodiversities.*, species.name as species, genus.name as genus, familia.name as familia, ordos.name as ordo, classes.name as classis, kingdoms.name as kingdom, phylums.name as phylum, diovisios.name as diovisio, statuses.name as status, statuses.description as status_description, habitats.name as habitat, habitats.description as habitat_description").
		Joins("JOIN statuses ON biodiversities.status_id = statuses.id").
		Joins("JOIN habitats ON biodiversities.habitat_id = habitats.id").
		Joins("JOIN species ON biodiversities.species_id = species.id").
		Joins("JOIN genus ON species.genus_id = genus.id").
		Joins("JOIN familia ON genus.familia_id = familia.id").
		Joins("JOIN ordos ON familia.ordo_id = ordos.id").
		Joins("JOIN classes ON ordos.classis_id = classes.id").
		Joins("LEFT JOIN phylums ON classes.phylum_id = phylums.id").
		Joins("LEFT JOIN diovisios ON classes.diovisio_id = diovisios.id").
		Joins("JOIN kingdoms ON classes.kingdom_id = kingdoms.id").
		Where("biodiversities.id = ?", id).
		Scan(biodiversityResponse).Error; err != nil {
		return nil, err
	}

	return biodiversityResponse, nil
}

func (d *biodiversity) GetByFilter(filter entity.FilterBiodiversity) ([]*entity.BiodiversityResponse, error) {
	var biodiversities []*entity.BiodiversityResponse
	if err := d.db.Table("biodiversities").
		Select("biodiversities.*, species.name as species, genus.name as genus, familia.name as familia, ordos.name as ordo, classes.name as classis, kingdoms.name as kingdom, phylums.name as phylum, diovisios.name as diovisio, statuses.name as status, habitats.name as habitat").
		Joins("JOIN statuses ON biodiversities.status_id = statuses.id").
		Joins("JOIN habitats ON biodiversities.habitat_id = habitats.id").
		Joins("JOIN species ON biodiversities.species_id = species.id").
		Joins("JOIN genus ON species.genus_id = genus.id").
		Joins("JOIN familia ON genus.familia_id = familia.id").
		Joins("JOIN ordos ON familia.ordo_id = ordos.id").
		Joins("JOIN classes ON ordos.classis_id = classes.id").
		Joins("LEFT JOIN phylums ON classes.phylum_id = phylums.id").
		Joins("LEFT JOIN diovisios ON classes.diovisio_id = diovisios.id").
		Joins("JOIN kingdoms ON classes.kingdom_id = kingdoms.id").
		Where("statuses.name LIKE ? AND habitats.name LIKE ? AND kingdoms.name LIKE ? AND biodiversities.name LIKE ?", "%"+filter.StatusID+"%", "%"+filter.HabitatID+"%", "%"+filter.KingdomID+"%", "%"+filter.Name+"%").
		Find(&biodiversities).Error; err != nil {
		return nil, err
	}
	return biodiversities, nil
}

func (d *biodiversity) GetAll() ([]*entity.BiodiversityResponse, error) {
	var biodiversities []*entity.BiodiversityResponse
	if err := d.db.
		Table("biodiversities").
		Select("biodiversities.*, species.name as species, genus.name as genus, familia.name as familia, ordos.name as ordo, classes.name as classis, kingdoms.name as kingdom, phylums.name as phylum, diovisios.name as diovisio, statuses.name as status, habitats.name as habitat").
		Joins("JOIN statuses ON biodiversities.status_id = statuses.id").
		Joins("JOIN habitats ON biodiversities.habitat_id = habitats.id").
		Joins("JOIN species ON biodiversities.species_id = species.id").
		Joins("JOIN genus ON species.genus_id = genus.id").
		Joins("JOIN familia ON genus.familia_id = familia.id").
		Joins("JOIN ordos ON familia.ordo_id = ordos.id").
		Joins("JOIN classes ON ordos.classis_id = classes.id").
		Joins("LEFT JOIN phylums ON classes.phylum_id = phylums.id").
		Joins("LEFT JOIN diovisios ON classes.diovisio_id = diovisios.id").
		Joins("JOIN kingdoms ON classes.kingdom_id = kingdoms.id").
		Find(&biodiversities).Error; err != nil {
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
