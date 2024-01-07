package seeds

import (
	entity "flonn-be/pkg/entity/classification"

	"gorm.io/gorm"
)

func (s *seeder) seedKingdom(sql *gorm.DB) error {
	var objects []entity.Kingdom

	if err := sql.First(&objects).Error; err != gorm.ErrRecordNotFound {
		return err
	}
	objects = []entity.Kingdom{
		{
			ID:              1,
			Name:            "Animalia",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
		},
		{
			ID:              2,
			Name:            "Plantae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
		},
		{
			ID:              3,
			Name:            "Fungi",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
		},
		{
			ID:              4,
			Name:            "Protista",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
		},
		{
			ID:              5,
			Name:            "Bacteria",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
		},
		{
			ID:              6,
			Name:            "Archaea",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
