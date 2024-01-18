package repository

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

type DisasterInterface interface {
	Create(disaster *entity.Disaster) error
	GetByID(id int) (*entity.Disaster, error)
	GetAll() ([]*entity.DisasterResponse, error)
	Update(disaster *entity.Disaster) error
	Delete(id int) error
}

type disaster struct {
	db *gorm.DB
}

func DisasterRepoInit(db *gorm.DB) DisasterInterface {
	return &disaster{db: db}
}

func (d *disaster) Create(disaster *entity.Disaster) error {
	if err := d.db.Create(disaster).Error; err != nil {
		return err
	}
	return nil
}

func (d *disaster) GetByID(id int) (*entity.Disaster, error) {
	disaster := &entity.Disaster{}
	if err := d.db.First(disaster, id).Error; err != nil {
		return nil, err
	}
	return disaster, nil
}

func (d *disaster) GetAll() ([]*entity.DisasterResponse, error) {
	var disasters []*entity.Disaster
	if err := d.db.
		Order("date desc").
		Find(&disasters).Error; err != nil {
		return nil, err
	}

	var disasterResp []*entity.DisasterResponse
	for _, disaster := range disasters {
		disasterType := &entity.DisasterType{}
		if err := d.db.First(disasterType, disaster.DisasterTypeID).Error; err != nil {
			return nil, err
		}

		response := &entity.DisasterResponse{
			ID:             int(disaster.ID),
			DisasterType:   disasterType.Name,
			Location:       disaster.Location,
			Province:       disaster.Province,
			Photo:          disaster.Photo,
			Description:    disaster.Description,
			Date:           disaster.Date,
			MonetaryLoss:   disaster.MonetaryLoss,
			BuildingDamage: disaster.BuildingDamage,
			Deaths:         disaster.Deaths,
			Injured:        disaster.Injured,
			Missing:        disaster.Missing,
			Evacuated:      disaster.Evacuated,
			Latitude:       disaster.Latitude,
			Longitude:      disaster.Longitude,
		}

		disasterResp = append(disasterResp, response)
	}

	return disasterResp, nil
}

func (d *disaster) Update(disaster *entity.Disaster) error {
	if err := d.db.Save(disaster).Error; err != nil {
		return err
	}
	return nil
}

func (d *disaster) Delete(id int) error {
	if err := d.db.Delete(&entity.Disaster{}, id).Error; err != nil {
		return err
	}
	return nil
}
