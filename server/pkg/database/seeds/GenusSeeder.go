package seeds

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

func (s *seeder) seedGenus(sql *gorm.DB) error {
	var objects []entity.Genus

	if err := sql.First(&objects).Error; err != gorm.ErrRecordNotFound {
		return err
	}
	objects = []entity.Genus{
		{
			Name:            "Panthera",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Vulpes",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       2,
		},
		{
			Name:            "Ursus",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Bubo",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Muntiacus",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Crotalus",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Giraffa",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Trachemys",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Uca",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Salmo",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Theobroma",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Sequoia",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Pinus",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Cassiope",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Salvia",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Yucca",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Pleurotus",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Amanita",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Cortinarius",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Tricholoma",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Ophiocordyceps",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Podaxis",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Leishmania",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Dictyostelium",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Amoeba",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Thalassiosira",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Ceratium",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Paramecium",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Motiliproteus",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Prochlorococcus",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Nitrosopumilus",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Vibrio",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Francisella",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Rhizobium",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Halobacterium Elazari-Volcani Genus",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Methanococcus",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Pyrococcus",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Methanopyrus",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Thermococcus",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
		{
			Name:            "Nanoarchaeum",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			FamiliaID:       1,
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
