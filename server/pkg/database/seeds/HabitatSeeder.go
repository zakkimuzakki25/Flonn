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
			Name:        "Hutan Hujan",
			Description: "Hutan lebat yang kaya akan keanekaragaman hayati, biasanya ditemukan di daerah tropis dengan curah hujan tinggi sepanjang tahun.",
		},
		{
			Name:        "Hutan Beriklim Sedang",
			Description: "Hutan yang terletak di daerah beriklim sedang, dengan campuran pohon gugur dan sejenis pohon jarum, dengan musim yang berbeda termasuk musim dingin dan musim panas yang hangat.",
		},
		{
			Name:        "Taiga",
			Description: "Hutan jenis konifera, juga dikenal sebagai hutan boreal, ditemukan di wilayah utara, didominasi oleh pohon cemara seperti pohon cemara dan pinus.",
		},
		{
			Name:        "Tundra",
			Description: "Dataran luas tanpa pepohonan di daerah kutub utara, yang ditandai dengan lapisan es, suhu rendah, dan vegetasi terbatas seperti lumut dan lumut.",
		},
		{
			Name:        "Semak Belukar",
			Description: "Area yang ditutupi semak belukar dan vegetasi rendah, sering ditemukan di daerah kering atau semi-kering, dengan musim panas yang terik dan musim dingin yang sejuk.",
		},
		{
			Name:        "Gurun",
			Description: "Wilayah gersang dengan curah hujan yang minim, vegetasi yang jarang, dan variasi suhu yang ekstrem, sering kali memiliki bukit pasir dan medan berbatu.",
		},
		{
			Name:        "Padang Rumput",
			Description: "Ekosistem yang didominasi oleh rerumputan, dengan sedikit pohon atau semak, umumnya ditemukan di daerah beriklim sedang dan tropis, yang mendukung berbagai herbivora.",
		},
		{
			Name:        "Perairan Lentik",
			Description: "Badan air yang tergenang atau bergerak lambat, seperti danau, kolam, atau rawa, di mana sedimentasi biasa terjadi.",
		},
		{
			Name:        "Zona Litoral",
			Description: "Wilayah pesisir dari suatu perairan, seperti danau atau lautan, tempat bertemunya daratan dan air, yang sering kali mendukung kehidupan tumbuhan dan hewan yang beragam.",
		},
		{
			Name:        "Perairan Lotik",
			Description: "Badan air yang mengalir atau bergerak seperti sungai dan anak sungai, yang ditandai dengan arus dan mendukung berbagai organisme air.",
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}