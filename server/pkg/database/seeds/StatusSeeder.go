package seeds

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

func (s *seeder) seedStatus(sql *gorm.DB) error {
	var objects []entity.Status

	if err := sql.First(&objects).Error; err != gorm.ErrRecordNotFound {
		return err
	}

	objects = []entity.Status{
		{
			Name:        "LC",
			Description: "Rendah Khawatir (Least Concern)",
		},
		{
			Name:        "NT",
			Description: "Dekat Terancam (Near Threatened)",
		},
		{
			Name:        "VU",
			Description: "Rentan (Vulnerable)",
		},
		{
			Name:        "EN",
			Description: "Terancam (Endangered)",
		},
		{
			Name:        "CR",
			Description: "Kritis Terancam (Critically Endangered)",
		},
		{
			Name:        "EW",
			Description: "Menghilang di Alam Liar (Extinct in the Wild)",
		},
		{
			Name:        "EX",
			Description: "Menghilang (Extinct)",
		},
		{
			Name:        "DD",
			Description: "Data Kurang (Data Deficient)",
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
