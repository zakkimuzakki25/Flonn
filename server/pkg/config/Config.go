package config

import (
	"os"

	"github.com/joho/godotenv"
)

type ConfigLoader interface {
	LoadEnvironment(envPath string) error
	GetEnvVar(key string) string
}

type configuration struct{}

func Init() ConfigLoader {
	return &configuration{}
}

func (c *configuration) LoadEnvironment(envPath string) error {
	return godotenv.Load(envPath)
}

func (c *configuration) GetEnvVar(key string) string {
	return os.Getenv(key)
}
