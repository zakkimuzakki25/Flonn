package seeds

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

func (s *seeder) seedDummyDisaster(sql *gorm.DB) error {
	var objects []entity.Disaster

	if err := sql.First(&objects).Error; err != gorm.ErrRecordNotFound {
		return err
	}
	objects = []entity.Disaster{
		{
			DisasterTypeID: 1,
			Location:       "Location A",
			Description:    "Disaster A",
			MonetaryLoss:   10000.50,
			BuildingDamage: 5,
			Deaths:         2,
			Injured:        10,
			Missing:        3,
			Evacuated:      20,
			Latitude:       40.7128,
			Longitude:      -74.0060,
		},
		{
			DisasterTypeID: 2,
			Location:       "Location B",
			Description:    "Disaster B",
			MonetaryLoss:   7500.75,
			BuildingDamage: 3,
			Deaths:         1,
			Injured:        5,
			Missing:        2,
			Evacuated:      15,
			Latitude:       34.0522,
			Longitude:      -118.2437,
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
