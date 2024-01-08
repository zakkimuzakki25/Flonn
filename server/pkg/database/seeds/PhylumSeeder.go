package seeds

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

func (s *seeder) seedPhylum(sql *gorm.DB) error {
	var objects []entity.Phylum

	if err := sql.First(&objects).Error; err != gorm.ErrRecordNotFound {
		return err
	}
	objects = []entity.Phylum{
		{
			Name:            "Acanthocephala",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Acoelomorpha",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Annelida",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Arthropoda",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Brachiopoda",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Bryozoa",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Chaetognatha",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Chordata",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Cnidaria",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Ctenophora",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Cycliophora",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Echinodermata",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Entoprocta",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Gastrotricha",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Gnathostomulida",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Hemichordata",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Kinorhynota",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Loricifera",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Micrognathozoa",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Mollusca",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Nematoda",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Nematomorpha",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Nemertea",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Onychophora",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Orthonectida",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Phoronida",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Placozoa",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Platyhelmithes",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Porifera",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Priapulida",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Rhombozoa",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Rotifera",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Sipuncula",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Tardigrada",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},
		{
			Name:            "Xenoturbellida",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
		},

		// Fungi Kingdom
		{
			Name:            "Zygomycota",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       3,
		},
		{
			Name:            "Ascomycota",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       3,
		},
		{
			Name:            "Basidiomycota",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       3,
		},
		{
			Name:            "Chytridiomycota",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       3,
		},
		{
			Name:            "Glomeromycota",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       3,
		},
		{
			Name:            "Neocallimastigomycota",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       3,
		},
		{
			Name:            "Mucoromycota",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       3,
		},

		// Protista Kingdom
		{
			Name:            "Amoebozoa",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       4,
		},
		{
			Name:            "Myzozoa",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       4,
		},
		{
			Name:            "Ciliophora",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       4,
		},
		{
			Name:            "Rhizaria",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       4,
		},
		{
			Name:            "Euglenozoa",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       4,
		},
		{
			Name:            "Mycetozoa",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       4,
		},
		{
			Name:            "Ochrophyta",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       4,
		},

		// Bacteria Kingdom
		{
			Name:            "Firmicutes",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       5,
		},
		{
			Name:            "Proteobacteria",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       5,
		},
		{
			Name:            "Actinobacteria",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       5,
		},
		{
			Name:            "Bacteroidetes",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       5,
		},
		{
			Name:            "Cyanobacteria",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       5,
		},
		{
			Name:            "Spirochaetes",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       5,
		},
		{
			Name:            "Thermoproteota",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       5,
		},

		// Archea Kingdom
		{
			Name:            "Euryarchaeota",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       6,
		},
		{
			Name:            "Crenarchaeota",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       6,
		},
		{
			Name:            "Korarchaeota",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       6,
		},
		{
			Name:            "Nanoarchaeota",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       6,
		},
		{
			Name:            "Halobacteriota",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       6,
		},
		{
			Name:            "Methanobacteriota_A",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       6,
		},
		{
			Name:            "Methanobacteriota_B",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       6,
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
