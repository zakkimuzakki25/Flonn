package seeds

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

func (s *seeder) seedStatus(sql *gorm.DB) error {
	var objects []entity.Status

	if err := sql.First(&objects).Error; err != gorm.ErrRecordNotFound {
		return err
	}

	objects = []entity.Status{
		{
			Name:        "LC",
			Description: "Least Concern (Risiko Rendah) - tidak memenuhi kriteria untuk kategori yang lebih terancam.",
		},
		{
			Name:        "NT",
			Description: "Near Threatened (Hampir Terancam) - mungkin akan diklasifikasikan sebagai terancam dalam waktu dekat.",
		},
		{
			Name:        "VU",
			Description: "Vulnerable (Rentan) - menghadapi risiko tinggi kepunahan di alam liar.",
		},
		{
			Name:        "EN",
			Description: "Endangered (Terancam) - menghadapi risiko sangat tinggi kepunahan di alam liar.",
		},
		{
			Name:        "CR",
			Description: "Critically Endangered (Kritis) - menghadapi risiko tinggi kepunahan di alam liar dalam waktu dekat.",
		},
		{
			Name:        "EW",
			Description: "Extinct in the Wild (Punah di Alam Liar) - hanya tersisa di penangkaran atau sebagai populasi naturalisasi di luar jangkauan aslinya.",
		},
		{
			Name:        "EX",
			Description: "Extinct (Punah) - tidak ada lagi individu yang diketahui hidup.",
		},
		{
			Name:        "DD",
			Description: "Data Deficient (Kekurangan Data) - tidak ada informasi yang cukup untuk membuat penilaian langsung tentang risiko kepunahan.",
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
