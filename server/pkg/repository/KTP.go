package repository

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

type KTPInteface interface {
	Create(ktp *entity.KTP) (*entity.KTP, error)
	GetByUserID(id uint) (*entity.KTP, error)
	GetByEmail(email string) (*entity.KTP, error)
	GetAll() ([]*entity.KTP, error)
	GetAllUnverified() ([]*entity.KTP, error)
	Update(ktp *entity.KTP) error
	Delete(id int) error
}

type ktp struct {
	db *gorm.DB
}

func KTPRepoInit(db *gorm.DB) KTPInteface {
	return &ktp{db: db}
}

func (d *ktp) Create(ktp *entity.KTP) (*entity.KTP, error) {
	if err := d.db.Create(ktp).Error; err != nil {
		return nil, err
	}
	return ktp, nil
}

func (d *ktp) GetByUserID(id uint) (*entity.KTP, error) {
	ktp := &entity.KTP{}
	if err := d.db.Where("user_id = ?", id).First(ktp).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			return nil, nil
		}
		return nil, err
	}
	return ktp, nil
}


func (d *ktp) GetByEmail(email string) (*entity.KTP, error) {
	ktp := &entity.KTP{}
	if err := d.db.Where("email = ?", email).First(&ktp).Error; err != nil {
		return nil, err
	}
	return ktp, nil
}

func (d *ktp) GetAll() ([]*entity.KTP, error) {
	var ktp []*entity.KTP
	if err := d.db.Find(&ktp).Error; err != nil {
		return nil, err
	}
	return ktp, nil
}

func (d *ktp) Update(ktp *entity.KTP) error {
	if err := d.db.Save(ktp).Error; err != nil {
		return err
	}
	return nil
}

func (d *ktp) Delete(id int) error {
	if err := d.db.Delete(&entity.KTP{}, id).Error; err != nil {
		return err
	}
	return nil
}

func (d *ktp) GetAllUnverified() ([]*entity.KTP, error) {
	var ktp []*entity.KTP
	if err := d.db.Where("status = ?", "pending").Find(&ktp).Error; err != nil {
		return nil, err
	}
	return ktp, nil
}
