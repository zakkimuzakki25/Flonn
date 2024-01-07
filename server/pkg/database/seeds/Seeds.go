package seeds

import "gorm.io/gorm"

type dataSeeder interface {
	seedKingdom(sql *gorm.DB) error
	seedDiovisio(sql *gorm.DB) error
	seedPhylum(sql *gorm.DB) error
	seedClassis(sql *gorm.DB) error
	seedOrdo(sql *gorm.DB) error
	seedFamilia(sql *gorm.DB) error
	seedGenus(sql *gorm.DB) error
	seedSpecies(sql *gorm.DB) error
}

type seeder struct{}

func InitSeeder() dataSeeder {
	return &seeder{}
}
