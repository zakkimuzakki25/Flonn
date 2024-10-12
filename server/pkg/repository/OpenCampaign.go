package repository

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

type OpenCampaignInterface interface {
	Create(openCampaign *entity.OpenCampaign) error
	GetByID(id int) (*entity.OpenCampaign, error)
	GetAll() ([]*entity.OpenCampaign, error)
	Update(openCampaign *entity.OpenCampaign) error
	Delete(id int) error
	CountParticipants(id int) (int, error)
}

type openCampaign struct {
	db *gorm.DB
}

func OpenCampaignRepoInit(db *gorm.DB) OpenCampaignInterface {
	return &openCampaign{db: db}
}

func (d *openCampaign) Create(openCampaign *entity.OpenCampaign) error {
	if err := d.db.Create(openCampaign).Error; err != nil {
		return err
	}
	return nil
}

func (d *openCampaign) GetByID(id int) (*entity.OpenCampaign, error) {
	openCampaign := &entity.OpenCampaign{}
	if err := d.db.First(openCampaign, id).Error; err != nil {
		return nil, err
	}

	tasks := []entity.OpenCampaignTask{}
	if err := d.db.Where("open_campaign_id = ?", id).Find(&tasks).Error; err != nil {
		return nil, err
	}

	openCampaign.OpenCampaignTasks = tasks

	return openCampaign, nil
}

func (d *openCampaign) GetAll() ([]*entity.OpenCampaign, error) {
	var openCampaigns []*entity.OpenCampaign
	if err := d.db.Find(&openCampaigns).Error; err != nil {
		return nil, err
	}
	return openCampaigns, nil
}

func (d *openCampaign) Update(openCampaign *entity.OpenCampaign) error {
	if err := d.db.Save(openCampaign).Error; err != nil {
		return err
	}
	return nil
}

func (d *openCampaign) Delete(id int) error {
	if err := d.db.Delete(&entity.OpenCampaign{}, id).Error; err != nil {
		return err
	}
	return nil
}

func (d *openCampaign) CountParticipants(id int) (int, error) {
	var count int64

	tasks := []entity.OpenCampaignTask{}
	if err := d.db.Where("open_campaign_id = ?", id).Find(&tasks).Error; err != nil {
		return 0, err
	}

	if err := d.db.Model(&entity.OpenCampaignParticipant{}).
		Where("open_campaign_task_id IN (?)", d.db.Model(&entity.OpenCampaignTask{}).Select("id").Where("open_campaign_id = ?", id)).
		Count(&count).Error; err != nil {
		return 0, err
	}

	return int(count), nil
}
