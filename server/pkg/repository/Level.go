package repository

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

type LevelInterface interface {
	Create(level *entity.Level) error
	GetDetailByLevel(level int) (*entity.Level, error)
	GetAll() ([]*entity.Level, error)
	Update(level *entity.Level) error
	Delete(id int) error
}

type level struct {
	db *gorm.DB
}

func LevelRepoInit(db *gorm.DB) LevelInterface {
	return &level{db: db}
}

func (d *level) Create(level *entity.Level) error {
	if err := d.db.Create(level).Error; err != nil {
		return err
	}
	return nil
}

func (d *level) GetDetailByLevel(level int) (*entity.Level, error) {
	levelResp := &entity.Level{}
	if err := d.db.Where("level = ?", level).First(levelResp).Error; err != nil {
		return nil, err
	}
	return levelResp, nil
}


func (d *level) GetAll() ([]*entity.Level, error) {
	var levels []*entity.Level
	if err := d.db.Find(&levels).Error; err != nil {
		return nil, err
	}
	return levels, nil
}

func (d *level) Update(level *entity.Level) error {
	if err := d.db.Save(level).Error; err != nil {
		return err
	}
	return nil
}

func (d *level) Delete(id int) error {
	if err := d.db.Delete(&entity.Level{}, id).Error; err != nil {
		return err
	}
	return nil
}
