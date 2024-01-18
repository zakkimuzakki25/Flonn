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
			Title:       "Harimau Sumatra",
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/donation%2Fkonservasi%20harimau.jpg?alt=media&token=318f3cdc-9be9-42b9-b493-7a679d910eb1",
			Description: "Bantu fasilitasi lembaga konservasi di sumatra untuk lindungi spesies harimau sumatra.",
			IsDisaster:  false,
		},
		{
			Title:       "Konservasi Anggrek",
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/donation%2Fkonservasi%20anggrek.jpg?alt=media&token=273dcac1-d586-4067-a441-786511dcc751",
			Description: "Bantu pembangunan dan pengembangan fasilitas untuk budidaya konservasi anggrek.",
			IsDisaster:  false,
		},
		{
			Title:       "Rehab terumbu karang",
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/donation%2Frehabilitasi%20terumbung%20karang.jpeg?alt=media&token=d0e54ba1-f409-43a5-b90d-27f508153543",
			Description: "Bantu pengembangan rehabilitas dan konservasi terumbu karang di daerah samosir.",
			IsDisaster:  false,
		},
		{
			Title:       "Banjir Sumatera Selatan",
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/disaster%2FTanah%20Longsor.jpg?alt=media&token=e1960500-18f6-4679-a970-d7ad6394ac4e",
			Description: "Banjir bandang melanda Palembang",
			IsDisaster:  true,
		},
		{
			Title:       "Badai Jawa Timur",
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/disaster%2FBadai.jpg?alt=media&token=c38e3142-d0a6-4cae-bfd3-438101908982",
			Description: "Bencana tambahan di Kecamatan Bululawang, Malang",
			IsDisaster:  true,
		},
		{
			Title:       "Gempa Bumi DKI Jakarta",
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/disaster%2FGempa%20Bumi.jpg?alt=media&token=7cc0892f-f83a-4856-bb7e-cd2993a783a5",
			Description: "Bencana tambahan di wilayah Jakarta",
			IsDisaster:  true,
		},
		{
			Title:       "Banjir DI Yogyakarta",
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/disaster%2FBanjir.jpg?alt=media&token=31a32a97-474e-4ee3-a5c0-a3db302b9430",
			Description: "Bencana tambahan di wilayah Yogyakarta",
			IsDisaster:  true,
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
