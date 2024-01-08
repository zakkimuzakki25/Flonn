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

	seedDisasterType(sql *gorm.DB) error

	seedDummyDisaster(sql *gorm.DB) error

	Seed(sql *gorm.DB) error
}

type seeder struct{}

func InitSeeder() dataSeeder {
	return &seeder{}
}

func (s *seeder) Seed(sql *gorm.DB) error {
	if err := s.seedKingdom(sql); err != nil {
		return err
	}
	if err := s.seedDiovisio(sql); err != nil {
		return err
	}
	if err := s.seedPhylum(sql); err != nil {
		return err
	}
	if err := s.seedClassis(sql); err != nil {
		return err
	}
	if err := s.seedOrdo(sql); err != nil {
		return err
	}
	if err := s.seedFamilia(sql); err != nil {
		return err
	}
	if err := s.seedGenus(sql); err != nil {
		return err
	}
	if err := s.seedSpecies(sql); err != nil {
		return err
	}

	if err := s.seedDisasterType(sql); err != nil {
		return err
	}

	if err := s.seedDummyDisaster(sql); err != nil {
		return err
	}

	return nil
}
