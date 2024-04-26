package seeds

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

func (s *seeder) seedMerch(sql *gorm.DB) error {
	var objects []entity.Merch

	if err := sql.First(&objects).Error; err != gorm.ErrRecordNotFound {
		return err
	}

	objects = []entity.Merch{
		{
			Title:       "FLONNTEER T-Shirt",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante.",
			Price:       150000,
			Floint:      30,
			Rate:        4.5,
			Stock:       100,
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/merchandise%2FMerch%20T-Shirt.png?alt=media&token=58be48c4-264b-4cc5-a2bb-7d495a52a2a2",
		},
		{
			Title:       "Natural Soap",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante.",
			Price:       100000,
			Floint:      30,
			Rate:        4.5,
			Stock:       100,
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/merchandise%2FTOKO%20NATURAL%20SHOP.jpg?alt=media&token=af3d0b16-5594-4c67-bb33-b37c3fa99e38",
		},
		{
			Title:       "Potpourri",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante.",
			Price:       40000,
			Floint:      30,
			Rate:        4.5,
			Stock:       100,
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/merchandise%2FTOKO%20POUTPOURRI.jpg?alt=media&token=30b98b7c-4853-44a0-b3d7-fdc9c080d1bc",
		},
		{
			Title:       "Totebag",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante.",
			Price:       40000,
			Floint:      30,
			Rate:        4.5,
			Stock:       100,
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/merchandise%2FTOKO%20TOTEBAG.jpg?alt=media&token=31b9a320-9e0f-47c5-a4d4-e1fd393039b3",
		},
		{
			Title:       "ReForged Pendant",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante.",
			Price:       150000,
			Floint:      30,
			Rate:        4.5,
			Stock:       100,
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/merchandise%2FTOKO%20ReForged%20Pendant.jpg?alt=media&token=0bada079-0106-4349-a947-36eae7f5a1ff",
		},
		{
			Title:       "EcoChic Bracelet",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante.",
			Price:       100000,
			Floint:      30,
			Rate:        4.5,
			Stock:       100,
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/merchandise%2FTOKO%20EcoChic%20Bracelet.jpg?alt=media&token=395dfc65-c25d-47c8-817a-af0020a92b2f",
		},
		{
			Title:       "Spearmint Potpourri",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante.",
			Price:       40000,
			Floint:      30,
			Rate:        4.5,
			Stock:       100,
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/merchandise%2FTOKO%20Spearmint%20Potpourri.jpg?alt=media&token=9dde35be-2d4f-4111-ba10-5c6bb8cc9fe3",
		},
		{
			Title:       "GreenGrocer Bag",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante.",
			Price:       40000,
			Floint:      30,
			Rate:        4.5,
			Stock:       100,
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/merchandise%2FTOKO%20GreenGrocer%20Bag.jpg?alt=media&token=7cc3f897-e9fa-4cdf-9804-3b7c523bdb94",
		},
		{
			Title:       "PureWeave Scarf",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante.",
			Price:       150000,
			Floint:      30,
			Rate:        4.5,
			Stock:       100,
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/merchandise%2FTOKO%20PureWeave%20Scarf.jpg?alt=media&token=15f8c5b6-74d6-455c-94b0-16ac3c226dfe",
		},
		{
			Title:       "EcoScribe Notebooks",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante.",
			Price:       100000,
			Floint:      30,
			Rate:        4.5,
			Stock:       100,
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/merchandise%2FTOKO%20EcoScribe%20Notebooks.jpg?alt=media&token=99d577ca-d404-4b9a-9f7b-6e045c09c097",
		},
		{
			Title:       "RelicArt Creations",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante.",
			Price:       40000,
			Floint:      30,
			Rate:        4.5,
			Stock:       100,
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/merchandise%2FTOKO%20RelicArt%20Creations.jpg?alt=media&token=d4e9aff8-72ec-47eb-bfda-1853c8d175ca",
		},
		{
			Title:       "CleanGlow Candles",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante.",
			Price:       40000,
			Floint:      30,
			Rate:        4.5,
			Stock:       100,
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/merchandise%2FTOKO%20CleanGlow%20Candles.jpg?alt=media&token=293a00c6-b95d-427a-9a55-a9a6393f74c3",
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
