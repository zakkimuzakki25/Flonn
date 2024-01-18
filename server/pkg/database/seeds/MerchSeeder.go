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
			Title:       "FLONNTEER Totebag",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante.",
			Price:       50000,
			Floint:      10,
			Rate:        4,
			Stock:       100,
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/merchandise%2FMerch%20T-Shirt.png?alt=media&token=58be48c4-264b-4cc5-a2bb-7d495a52a2a2",
		},
		{
			Title:       "FLONNTEER Tumbler",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante.",
			Price:       100000,
			Floint:      20,
			Rate:        5,
			Stock:       100,
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/merchandise%2FMerch%20T-Shirt.png?alt=media&token=58be48c4-264b-4cc5-a2bb-7d495a52a2a2",
		},
		{
			Title:       "Sabun Aromatik Organik",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante.",
			Price:       60000,
			Floint:      12,
			Rate:        4.3,
			Stock:       100,
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/merchandise%2Fmerch%20sabun.jpg?alt=media&token=5aa1e765-8449-472a-b1b2-e2737dfba9c8",
		},
		{
			Title:       "Parfum Organik (150 ml)",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante.",
			Price:       100000,
			Floint:      20,
			Rate:        4.7,
			Stock:       100,
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/merchandise%2Fparfum.png?alt=media&token=cd06d7c9-a0eb-4a55-b00e-d85af9fc9857",
		},
		{
			Title:       "Potpourri",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante.",
			Price:       40000,
			Floint:      8,
			Rate:        4.5,
			Stock:       100,
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/merchandise%2Fpotpourri.png?alt=media&token=f1001133-3563-4f0d-86a8-b762fd14da18",
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
