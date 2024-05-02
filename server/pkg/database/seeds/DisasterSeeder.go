package seeds

import (
	"flonn-be/pkg/entity"
	"time"

	"gorm.io/gorm"
)

func (s *seeder) seedDummyDisaster(sql *gorm.DB) error {
	var objects []entity.Disaster

	if err := sql.First(&objects).Error; err != gorm.ErrRecordNotFound {
		return err
	}
	objects = []entity.Disaster{
		{
			DisasterTypeID: 1,
			Location:       "Denpasar",
			Province:       "Bali",
			Description:    "Pada tanggal 15 Januari 2023, pukul 12:00 UTC, gempa bumi melanda wilayah Denpasar, Bali.",
			Date:           time.Date(2023, 1, 15, 12, 0, 0, 0, time.UTC),
			MonetaryLoss:   25000.75,
			BuildingDamage: 8,
			Deaths:         5,
			Injured:        15,
			Missing:        2,
			Evacuated:      30,
			Latitude:       -8.6500,
			Longitude:      115.2167,
			Strength:       4.5,
			MoreInfo:       "30 km from East Java Indonesia<>Magnitude Type : ML<>Depth : 10 K",
			Photo:          "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/disaster%2FGempa%20Bumi.jpg?alt=media&token=7cc0892f-f83a-4856-bb7e-cd2993a783a5",
		},
		{
			DisasterTypeID: 5,
			Photo:          "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/disaster%2FBanjir.jpg?alt=media&token=31a32a97-474e-4ee3-a5c0-a3db302b9430",
			Location:       "Bandung",
			Province:       "Jawa Barat",
			Description:    "Pada tanggal 20 Februari 2023, pukul 15:30 UTC, kawasan Bandung, Jawa Barat mengalami banjir yang parah.",
			Date:           time.Date(2023, 2, 20, 15, 30, 0, 0, time.UTC),
			MonetaryLoss:   30000.25,
			BuildingDamage: 6,
			Deaths:         3,
			Injured:        12,
			Missing:        1,
			Evacuated:      25,
			Latitude:       -6.2088,
			Longitude:      106.8456,
			MoreInfo:       "ketinggian 1,5 meter<>penyebab: curah hujan tinggi > 6 jam.",
		},
		{
			DisasterTypeID: 7,
			Photo:          "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/disaster%2FKebakaran%20Hutan.jpg?alt=media&token=411b8d64-be69-4f33-b57b-74c1287779fa",
			Location:       "Surabaya",
			Province:       "Jawa Timur",
			Description:    "Kebakaran hebat terjadi di Surabaya, Jawa Timur, pada tanggal 10 Maret 2023, pukul 08:00 UTC.",
			Date:           time.Date(2023, 3, 10, 8, 0, 0, 0, time.UTC),
			MonetaryLoss:   15000.50,
			BuildingDamage: 4,
			Deaths:         1,
			Injured:        8,
			Missing:        0,
			Evacuated:      18,
			Latitude:       -7.2575,
			Longitude:      112.7521,
			MoreInfo:       "korsleting listrik di salah satu bangunan.",
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
