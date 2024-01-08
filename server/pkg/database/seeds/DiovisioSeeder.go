package seeds

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

func (s *seeder) seedDiovisio(sql *gorm.DB) error {
	var objects []entity.Diovisio

	if err := sql.First(&objects).Error; err != gorm.ErrRecordNotFound {
		return err
	}
	objects = []entity.Diovisio{
		{
			Name:            "Marchantiophyta",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       2,
		},
		{
			Name:            "Anthocerotophyta",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       2,
		},
		{
			Name:            "Bryophyta",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       2,
		},
		{
			Name:            "Filicophyta",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       2,
		},
		{
			Name:            "Sphenophyta",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       2,
		},
		{
			Name:            "Cycadophyta",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       2,
		},
		{
			Name:            "Ginkgophyta",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       2,
		},
		{
			Name:            "Pinophyta",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       2,
		},
		{
			Name:            "Gnetophyta",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       2,
		},
		{
			Name:            "Magnoliophyta",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       2,
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
