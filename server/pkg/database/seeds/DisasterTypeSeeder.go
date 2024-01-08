package seeds

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

func (s *seeder) seedDisasterType(sql *gorm.DB) error {
	var objects []entity.DisasterType

	if err := sql.First(&objects).Error; err != gorm.ErrRecordNotFound {
		return err
	}
	objects = []entity.DisasterType{
		{
			Name: "Gempa Bumi",
		},
		{
			Name: "Tanah Longsor",
		},
		{
			Name: "Tornado",
		},
		{
			Name: "Badai",
		},
		{
			Name: "Banjir",
		},
		{
			Name: "Tsunami",
		},
		{
			Name: "Kebakaran Hutan",
		},
		{
			Name: "Gunung Meletus",
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
