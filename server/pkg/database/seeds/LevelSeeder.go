package seeds

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

func (s *seeder) seedLevel(sql *gorm.DB) error {
	var objects []entity.Level

	if err := sql.First(&objects).Error; err != gorm.ErrRecordNotFound {
		return err
	}

	objects = []entity.Level{
		{
			Level: 0,
			Tier: "Amoeba",
			MaxFloint: 100,
		},
		{
			Level: 1,
			Tier: "Semut",
			MaxFloint: 200,
		},
		{
			Level: 2,
			Tier: "Kucing",
			MaxFloint: 400,
		},
		{
			Level: 3,
			Tier: "Serigala",
			MaxFloint: 800,
		},
		{
			Level: 4,
			Tier: "Singa",
			MaxFloint: 1600,
		},
		{
			Level: 5,
			Tier: "Paus",
			MaxFloint: 1600,
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
