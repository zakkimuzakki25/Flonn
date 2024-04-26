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
			Name:        "Rainforest",
			Description: "A dense forest rich in biodiversity, typically found in tropical regions with high rainfall throughout the year.",
		},
		{
			Name:        "Temperate Forest",
			Description: "A forest located in temperate zones, featuring a mix of deciduous and coniferous trees, with distinct seasons including a cold winter and a warm summer.",
		},
		{
			Name:        "Taiga",
			Description: "A coniferous forest, also known as boreal forest, found in northern regions, dominated by evergreen trees such as spruce and pine.",
		},
		{
			Name:        "Tundra",
			Description: "A vast, treeless plain in the arctic regions, characterized by permafrost, low temperatures, and limited vegetation like moss and lichen.",
		},
		{
			Name:        "Shrubland",
			Description: "An area covered with shrubs and low vegetation, often found in arid or semi-arid regions, with hot summers and mild winters.",
		},
		{
			Name:        "Desert",
			Description: "An arid region with minimal rainfall, sparse vegetation, and extreme temperature variations, often featuring sand dunes and rocky terrain.",
		},
		{
			Name:        "Grassland",
			Description: "An ecosystem dominated by grasses, with few trees or shrubs, commonly found in temperate and tropical regions, supporting a variety of herbivores.",
		},
		{
			Name:        "Lentic Waters",
			Description: "A body of standing or slow-moving water, such as a lake, pond, or marsh, where sedimentation is common.",
		},
		{
			Name:        "Littoral Zone",
			Description: "The coastal area of a body of water, such as a lake or ocean, where land meets water, often supporting diverse plant and animal life.",
		},
		{
			Name:        "Lotic Waters",
			Description: "Flowing or moving water bodies like rivers and streams, characterized by currents and supporting various aquatic organisms.",
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
