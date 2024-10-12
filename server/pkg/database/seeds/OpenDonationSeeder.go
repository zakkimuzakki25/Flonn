package seeds

import (
	"flonn-be/pkg/entity"
	"time"

	"gorm.io/gorm"
)

func (s *seeder) seedDummyOpenDonation(sql *gorm.DB) error {
	var objects []entity.OpenDonation

	if err := sql.First(&objects).Error; err != gorm.ErrRecordNotFound {
		return err
	}

	parseTime := func(str string) time.Time {
		startDate, _ := time.Parse("2006-01-02", str)
		return startDate
	}

	objects = []entity.OpenDonation{
		{
			Title:       "Korban Kebakaran Hutan di Ohio",
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/donation%2Fmatt-palmer-kbTp7dBzHyY-unsplash.jpg?alt=media&token=941b45ed-e0b7-4133-b11b-2945c3cb3b53",
			Description: "Mari bersama-sama membantu saudara-saudara kita yang terdampak oleh bencana kebakaran hutan di Ohio. Kebakaran yang melahap hutan dan mengancam kediaman banyak keluarga memerlukan respons cepat dan bantuan dari kita semua. Partisipasi Sobat Flonn sangat berharga, dan setiap sumbangan akan menjadi bagian dari upaya pemulihan dan bantuan bagi mereka yang membutuhkan. Mari kita tunjukkan kepedulian kita. Klik tombol 'Donasi' dan berikan kontribusi seikhlasnya. Bagikan pula kebaikan ini dengan mengklik 'Share', karena setiap bantuan, tidak peduli besar atau kecil, sangat berarti. Bersama, kita bisa membuat perbedaan yang signifikan.",
			Target:      10000000,
			IsDisaster:  false,
			Date:        parseTime("2024-03-28"),
		},
		{
			Title:       "Konservasi Pohon Ulin di Kalimantan",
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/donation%2FRectangle%20102.png?alt=media&token=7d17e597-3631-4a8b-84c8-1e5defcde686",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante.",
			Target:      10000000,
			IsDisaster:  false,
			Date:        parseTime("2024-03-25"),
		},
		{
			Title:       "Untuk Korban Letusan Gunung Merapi",
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/donation%2FRectangle%20102%20(2).png?alt=media&token=9a7dd81d-ee9e-4e6f-b373-178cf3da6591",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante.",
			Target:      10000000,
			IsDisaster:  false,
			Date:        parseTime("2024-03-20"),
		},
		{
			Title:       "Bantu Penyelamatan Orangutan di Kalimantan",
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/donation%2FRectangle%20102%20(1).png?alt=media&token=86b299d5-8aaf-4851-9ae8-02a3c6ac7431",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante.",
			Target:      10000000,
			IsDisaster:  false,
			Date:        parseTime("2024-04-12"),
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
