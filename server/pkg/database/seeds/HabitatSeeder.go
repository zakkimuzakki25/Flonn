package seeds

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

func (s *seeder) seedHabitat(sql *gorm.DB) error {
	var objects []entity.Habitat

	if err := sql.First(&objects).Error; err != gorm.ErrRecordNotFound {
		return err
	}
	objects = []entity.Habitat{
		{
			Name:        "Hutan Hujan",
			Description: "Deskripsi Hutan Hujan#lorem ipsum dolor sit amet#consectetur adipiscing elit",
		},
		{
			Name:        "Hutan Suhu Sedang",
			Description: "Deskripsi Hutan Suhu Sedang#lorem ipsum dolor sit amet#consectetur adipiscing elit",
		},
		{
			Name:        "Taiga",
			Description: "Deskripsi Taiga#lorem ipsum dolor sit amet#consectetur adipiscing elit",
		},
		{
			Name:        "Tundra",
			Description: "Deskripsi Tundra#lorem ipsum dolor sit amet#consectetur adipiscing elit",
		},
		{
			Name:        "Semak-belukar",
			Description: "Deskripsi Semak-belukar#lorem ipsum dolor sit amet#consectetur adipiscing elit",
		},
		{
			Name:        "Padang Pasir",
			Description: "Deskripsi Padang Pasir#lorem ipsum dolor sit amet#consectetur adipiscing elit",
		},
		{
			Name:        "Padang Rumput",
			Description: "Deskripsi Padang Rumput#lorem ipsum dolor sit amet#consectetur adipiscing elit",
		},
		{
			Name:        "Perairan Lentik",
			Description: "Deskripsi Perairan Lentik#lorem ipsum dolor sit amet#consectetur adipiscing elit",
		},
		{
			Name:        "Litoral",
			Description: "Deskripsi Litoral#lorem ipsum dolor sit amet#consectetur adipiscing elit",
		},
		{
			Name:        "Perairan Lotik",
			Description: "Deskripsi Perairan Lotik#lorem ipsum dolor sit amet#consectetur adipiscing elit",
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
