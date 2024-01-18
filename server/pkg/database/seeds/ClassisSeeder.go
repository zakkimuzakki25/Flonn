package seeds

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

func (s *seeder) seedClassis(sql *gorm.DB) error {
	var objects []entity.Classis

	if err := sql.First(&objects).Error; err != gorm.ErrRecordNotFound {
		return err
	}
	objects = []entity.Classis{
		{
			Name:            "Mammalia",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
			PhylumID:        8,
		},
		{
			Name:            "Aves",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       2,
			DiovisioID:      8,
		},
		{
			Name:            "Reptilia",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
			PhylumID:        8,
		},
		{
			Name:            "Malacostraca",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
			PhylumID:        4,
		},
		{
			Name:            "Actinopterygii",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
			PhylumID:        8,
		},
		{
			Name:            "Insecta",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
			PhylumID:        4,
		},
		{
			Name:            "Arachnida",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
			PhylumID:        4,
		},
		{
			Name:            "Copepoda",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
			PhylumID:        4,
		},
		{
			Name:            "Gastropoda",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
			PhylumID:        20,
		},
		{
			Name:            "Bivalvia",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
			PhylumID:        20,
		},
		{
			Name:            "Amphibia",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
			PhylumID:        11,
		},
		{
			Name:            "Asteroidea",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
			PhylumID:        8,
		},
		{
			Name:            "Echinoidea",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
			PhylumID:        12,
		},
		{
			Name:            "Demospongiae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       1,
			PhylumID:        29,
		},
		{
			Name:            "Magnoliopsida",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       2,
			DiovisioID:      10,
		},
		{
			Name:            "Pinopsida",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       2,
			DiovisioID:      10,
		},
		{
			Name:            "Liliopsida",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       2,
			DiovisioID:      10,
		},
		{
			Name:            "Polypodiopsida",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       2,
			DiovisioID:      10,
		},
		{
			Name:            "Ginkgoopsida",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       2,
			DiovisioID:      10,
		},
		{
			Name:            "Marchantiopsida",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       2,
			DiovisioID:      1,
		},
		{
			Name:            "Lycopodiopsida",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       2,
			DiovisioID:      10,
		},
		{
			Name:            "Bryopsida",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       2,
			DiovisioID:      3,
		},
		{
			Name:            "Jungermanniopsida",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       2,
			DiovisioID:      3,
		},
		{
			Name:            "Cycadopsida",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       2,
			DiovisioID:      6,
		},
		{
			Name:            "Agaricomycetes",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       3,
			PhylumID:        38,
		},
		{
			Name:            "Sordariomycetes",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       3,
			PhylumID:        37,
		},
		{
			Name:            "Eurotiomycetes",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       3,
			PhylumID:        37,
		},
		{
			Name:            "Mucoromycetes",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       3,
			PhylumID:        42,
		},
		{
			Name:            "Dothideomycetes",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       3,
			PhylumID:        37,
		},
		{
			Name:            "Lecanoromycetes",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       3,
			PhylumID:        37,
		},
		{
			Name:            "Kinetoplastea",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       4,
			PhylumID:        47,
		},
		{
			Name:            "Dictyosteliomycetes",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       4,
			PhylumID:        48,
		},
		{
			Name:            "Lobosa",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       4,
			PhylumID:        43,
		},
		{
			Name:            "Bacillariophyceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       4,
			PhylumID:        49,
		},
		{
			Name:            "Dinophyceae",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       4,
			PhylumID:        44,
		},
		{
			Name:            "Oligohymenophorea",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       4,
			PhylumID:        45,
		},
		{
			Name:            "Gammaproteobacteria",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       5,
			PhylumID:        51,
		},
		{
			Name:            "Cyanobacteriia",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       5,
			PhylumID:        54,
		},
		{
			Name:            "Nitrososphaeria",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       5,
			PhylumID:        56,
		},
		{
			Name:            "Alphaproteobacteria",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       5,
			PhylumID:        51,
		},
		{
			Name:            "Actinomycetia",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       5,
			PhylumID:        52,
		},
		{
			Name:            "Coriobacteriia",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       5,
			PhylumID:        52,
		},
		{
			Name:            "Halobacteria",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       6,
			PhylumID:        61,
		},
		{
			Name:            "Methanococci",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       6,
			PhylumID:        62,
		},
		{
			Name:            "Thermococci",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       6,
			PhylumID:        63,
		},
		{
			Name:            "Methanopyri",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       6,
			PhylumID:        62,
		},
		{
			Name:            "Nanoarchaeia",
			Characteristics: "Lorem ipsum dolor sit amet#consectetur adipiscing elit#Sed sollicitudin libero id magna rhoncus#non pulvinar odio convallis",
			KingdomID:       6,
			PhylumID:        60,
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
