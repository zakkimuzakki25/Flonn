package main

import (
	configuration "flonn-be/pkg/config"
	"flonn-be/pkg/entity"
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
		log.Fatalln("Gagal load .env")
	}

	dbParams := fmt.Sprintf(
		"%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		config.GetEnvVar("DB_USERNAME"),
		config.GetEnvVar("DB_PASSWORD"),
		config.GetEnvVar("DB_HOST"),
		config.GetEnvVar("DB_PORT"),
		config.GetEnvVar("DB_DATABASE"),
	)
	database, err := gorm.Open(mysql.Open(dbParams), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})
	if err != nil {
		log.Fatalln(err)
	}

	database.AutoMigrate(entity.User{})

	handler := handler.Init(database)

	handler.Run()
}
