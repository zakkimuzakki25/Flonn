package main

import (
	configuration "flonn-be/pkg/config"
	"flonn-be/pkg/database/migrations"
	"flonn-be/pkg/database/seeds"
	"flonn-be/pkg/handler"
	"fmt"
	"log"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

func main() {
	config := configuration.Init()
	err := config.LoadEnvironment(".env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	dbParams := fmt.Sprintf(
		// "%s:%s@unix(%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		"%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		config.GetEnvVar("DB_USERNAME"),
		config.GetEnvVar("DB_PASSWORD"),
		config.GetEnvVar("DB_HOST"),
		config.GetEnvVar("DB_PORT"),
		// config.GetEnvVar("INSTANCE_UNIX_SOCKET"),
		config.GetEnvVar("DB_DATABASE"),
	)

	database, err := gorm.Open(mysql.Open(dbParams), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})
	if err != nil {
		log.Fatalln("Error koneksi database", err)
	}

	migrations.MigrateData(database)

	// Seeding data
	sdr := seeds.InitSeeder()
	if err := sdr.Seed(database); err != nil {
		fmt.Println(err)
		panic("Gagal Seed Data")
	}

	handler := handler.Init(database)

	handler.Run()
}
