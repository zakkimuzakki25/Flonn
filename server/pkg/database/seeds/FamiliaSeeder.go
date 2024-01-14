package seeds

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

func (s *seeder) seedFamilia(sql *gorm.DB) error {
	var objects []entity.Familia

	if err := sql.First(&objects).Error; err != gorm.ErrRecordNotFound {
		return err
	}
	objects = []entity.Familia{
		{
			Name:            "Felidae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Canidae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          2,
		},
		{
			Name:            "Ursidae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Strigidae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Cervidae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Viperidae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Giraffidae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Emydidae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Ocypodidae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Salmonidae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Malvaceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Cupressaceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Pinaceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Ericaceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Lamiaceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Asparagaceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Pleurotaceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Amanitaceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Cortinariaceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Tricholomataceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Ophiocordycipitaceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Agaricaceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Trypanosomatidae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Dictyosteliidae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Amoebidae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Thalassiosiraceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Ceratiaceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Parameciidae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Oceanospirillaceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Prochloraceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Nitrosopumilaceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Vibrionaceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Francisellaceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Rhizobiaceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Halobacteriaceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Methanococcaceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Thermococcaceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Methanopyraceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Methanofastidiosaceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
		{
			Name:            "Nanoarchaeaceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			OrdoID:          1,
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
