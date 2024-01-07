package migrations

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

func migrateData(db *gorm.DB) {
	db.AutoMigrate(entity.User{})
}
