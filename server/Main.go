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
	if err := config.LoadEnvironment(".env"); err != nil {
		log.Fatalln("Gagal memuat .env:", err)
		fmt.Print("test Print")
	}
	fmt.Print("Berhasil memuat .env:")

	// Tentukan parameter koneksi ke Cloud SQL menggunakan Unix Socket
	dbParams := fmt.Sprintf(
		"%s:%s@unix(%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		config.GetEnvVar("DB_USERNAME"),
		config.GetEnvVar("DB_PASSWORD"),
		config.GetEnvVar("INSTANCE_UNIX_SOCKET"),
		config.GetEnvVar("DB_DATABASE"),
	)

	database, err := gorm.Open(mysql.Open(dbParams), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})
	if err != nil {
		fmt.Print("test koneksi database error1")
		log.Fatalln(err)
		fmt.Print("test koneksi database error2")
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
