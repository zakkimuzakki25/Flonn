package repository

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

type MerchPurchaseInterface interface {
	Create(merchPurchase *entity.MerchPurchase) error
	GetByUserID(userID uint) ([]*entity.MerchPurchase, error)
	GetAll() ([]*entity.MerchPurchase, error)
	Update(merchPurchase *entity.MerchPurchase) error
	Delete(id int) error
}

type merchPurchase struct {
	db *gorm.DB
}

func MerchPurchaseRepoInit(db *gorm.DB) MerchPurchaseInterface {
	return &merchPurchase{db: db}
}

func (d *merchPurchase) Create(merchPurchase *entity.MerchPurchase) error {
	if err := d.db.Create(merchPurchase).Error; err != nil {
		return err
	}
	return nil
}

func (d *merchPurchase) GetAll() ([]*entity.MerchPurchase, error) {
	var merchs []*entity.MerchPurchase
	if err := d.db.Find(&merchs).Error; err != nil {
		return nil, err
	}
	return merchs, nil
}

func (d *merchPurchase) Update(merchPurchase *entity.MerchPurchase) error {
	if err := d.db.Save(merchPurchase).Error; err != nil {
		return err
	}
	return nil
}

func (d *merchPurchase) Delete(id int) error {
	if err := d.db.Delete(&entity.MerchPurchase{}, id).Error; err != nil {
		return err
	}
	return nil
}

func (d *merchPurchase) GetByUserID(userID uint) ([]*entity.MerchPurchase, error) {
	var merchs []*entity.MerchPurchase
	if err := d.db.Where("user_id = ?", userID).Find(&merchs).Error; err != nil {
		return nil, err
	}
	return merchs, nil
}