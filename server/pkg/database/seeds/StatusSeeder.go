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
			Description: "Least Concern - Species with a low risk of extinction and widely distributed in their natural habitats.",
		},
		{
			Name:        "NT",
			Description: "Near Threatened - Species that are close to qualifying for a threatened category in the near future.",
		},
		{
			Name:        "VU",
			Description: "Vulnerable - Species with a high risk of becoming endangered in the wild due to a variety of factors.",
		},
		{
			Name:        "EN",
			Description: "Endangered - Species with a very high risk of extinction in the wild, facing significant threats to their survival.",
		},
		{
			Name:        "CR",
			Description: "Critically Endangered - Species facing an extremely high risk of extinction in the wild, requiring urgent conservation measures.",
		},
		{
			Name:        "EW",
			Description: "Extinct in the Wild - Species no longer found in their natural habitats, but still existing in captivity or cultivation.",
		},
		{
			Name:        "EX",
			Description: "Extinct - Species that no longer exist anywhere on Earth, with no known surviving individuals.",
		},
		{
			Name:        "DD",
			Description: "Data Deficient - Species for which there is insufficient information to assess their risk of extinction.",
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
