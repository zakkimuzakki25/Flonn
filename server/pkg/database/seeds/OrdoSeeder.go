package seeds

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

func (s *seeder) seedOrdo(sql *gorm.DB) error {
	var objects []entity.Ordo

	if err := sql.First(&objects).Error; err != gorm.ErrRecordNotFound {
		return err
	}
	objects = []entity.Ordo{
		{
			Name:            "Carnivora",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Strigiformes",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Artiodactyla",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Squamata",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Testudines",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Decapoda",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Salmoniformes",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Primates",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Rodentia",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Chiroptera",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Passeriformes",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Hymenoptera",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Lepidoptera",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Coleoptera",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Malvales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Cupressales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Pinales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Ericales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Lamiales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Asparagales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Poales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Brassicales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Rosales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Agaricales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Hypocreales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Aspergillales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Eurotiales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Mucorales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Trypanosomatida",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Dictyosteliales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Amoebida",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Thalassiosirales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Gonyaulacales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Peniculida",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Gymnodiniales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Pseudomonadales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Cyanobacteriales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Nitrososphaerales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Enterobacterales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Francisellales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Rhizobiales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Pelagibacterales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Halobacteriales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Methanococcales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Thermococcales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Methanopyrales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Methanofastidiosales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
		{
			Name:            "Nanoarchaeales",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			ClassisID:       1,
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
