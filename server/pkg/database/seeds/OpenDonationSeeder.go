package seeds

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

func (s *seeder) seedDummyOpenDonation(sql *gorm.DB) error {
	var objects []entity.OpenDonation

	if err := sql.First(&objects).Error; err != gorm.ErrRecordNotFound {
		return err
	}
	objects = []entity.OpenDonation{
		{
			Title:       "Korban Kebakaran Hutan di Ohio",
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/donation%2Fmatt-palmer-kbTp7dBzHyY-unsplash.jpg?alt=media&token=941b45ed-e0b7-4133-b11b-2945c3cb3b53",
			Description: "Mari bersama-sama membantu saudara-saudara kita yang terdampak oleh bencana kebakaran hutan di Ohio. Kebakaran yang melahap hutan dan mengancam kediaman banyak keluarga memerlukan respons cepat dan bantuan dari kita semua. Partisipasi Sobat Flonn sangat berharga, dan setiap sumbangan akan menjadi bagian dari upaya pemulihan dan bantuan bagi mereka yang membutuhkan. Mari kita tunjukkan kepedulian kita. Klik tombol 'Donasi' dan berikan kontribusi seikhlasnya. Bagikan pula kebaikan ini dengan mengklik 'Share', karena setiap bantuan, tidak peduli besar atau kecil, sangat berarti. Bersama, kita bisa membuat perbedaan yang signifikan.",
			Target:      10000000,
			IsDisaster:  false,
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
