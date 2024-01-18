package seeds

import "gorm.io/gorm"

type dataSeeder interface {
	seedStatus(sql *gorm.DB) error
	seedMerch(sql *gorm.DB) error
	seedHabitat(sql *gorm.DB) error

	seedKingdom(sql *gorm.DB) error
	seedDiovisio(sql *gorm.DB) error
	seedPhylum(sql *gorm.DB) error
	seedClassis(sql *gorm.DB) error
	seedOrdo(sql *gorm.DB) error
	seedFamilia(sql *gorm.DB) error
	seedGenus(sql *gorm.DB) error
	seedSpecies(sql *gorm.DB) error

	seedBiodiversity(sql *gorm.DB) error

	seedDisasterType(sql *gorm.DB) error

	seedDummyDisaster(sql *gorm.DB) error
	seedDummyOpenDonation(sql *gorm.DB) error

	Seed(sql *gorm.DB) error
}

type seeder struct{}

func InitSeeder() dataSeeder {
	return &seeder{}
}

func (s *seeder) Seed(sql *gorm.DB) error {
	if err := s.seedStatus(sql); err != nil {
		return err
	}
	if err := s.seedMerch(sql); err != nil {
		return err
	}
	if err := s.seedHabitat(sql); err != nil {
		return err
	}

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

	if err := s.seedBiodiversity(sql); err != nil {
		return err
	}

	if err := s.seedDisasterType(sql); err != nil {
		return err
	}

	if err := s.seedDummyDisaster(sql); err != nil {
		return err
	}
	if err := s.seedDummyOpenDonation(sql); err != nil {
		return err
	}

	return nil
}
