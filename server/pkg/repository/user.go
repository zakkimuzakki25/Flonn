package repository

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

type UserInterface interface {
	Create(user *entity.User) (*entity.User, error)
	GetByID(id int) (*entity.User, error)
	GetByEmail(email string) (*entity.User, error)
	GetAll() ([]*entity.User, error)
	Update(user *entity.User) error
	Delete(id int) error
}

type user struct {
	db *gorm.DB
}

func UserRepoInit(db *gorm.DB) UserInterface {
	return &user{db: db}
}

func (d *user) Create(user *entity.User) (*entity.User, error) {
	if err := d.db.Create(user).Error; err != nil {
		return nil, err
	}
	return user, nil
}

func (d *user) GetByID(id int) (*entity.User, error) {
	user := &entity.User{}
	if err := d.db.First(user, id).Error; err != nil {
		return nil, err
	}
	return user, nil
}

func (d *user) GetByEmail(email string) (*entity.User, error) {
	user := &entity.User{}
	if err := d.db.Where("email = ?", email).First(&user).Error; err != nil {
		return nil, err
	}
	return user, nil
}

func (d *user) GetAll() ([]*entity.User, error) {
	var user []*entity.User
	if err := d.db.Find(&user).Error; err != nil {
		return nil, err
	}
	return user, nil
}

func (d *user) Update(user *entity.User) error {
	if err := d.db.Save(user).Error; err != nil {
		return err
	}
	return nil
}

func (d *user) Delete(id int) error {
	if err := d.db.Delete(&entity.User{}, id).Error; err != nil {
		return err
	}
	return nil
}
