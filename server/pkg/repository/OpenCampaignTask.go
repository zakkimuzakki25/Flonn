package repository

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

type OpenCampaignTaskInterface interface {
	Create(openCampaignTask *entity.OpenCampaignTask) error
	GetByID(id int) (*entity.OpenCampaignTask, error)
	GetAll() ([]*entity.OpenCampaignTask, error)
	Update(openCampaignTask *entity.OpenCampaignTask) error
	Delete(id int) error
	GetAllByCampaignID(id int) ([]*entity.OpenCampaignTask, error)
	GetAllUnverifiedParticipants(id int) ([]*entity.OpenCampaignParticipant, error)
	UpdateProofStatus(task_id, user_id int, status string) error
}

type openCampaignTask struct {
	db *gorm.DB
}

func OpenCampaignTaskRepoInit(db *gorm.DB) OpenCampaignTaskInterface {
	return &openCampaignTask{db: db}
}

func (d *openCampaignTask) Create(openCampaignTask *entity.OpenCampaignTask) error {
	if err := d.db.Create(openCampaignTask).Error; err != nil {
		return err
	}
	return nil
}

func (d *openCampaignTask) GetByID(id int) (*entity.OpenCampaignTask, error) {
	openCampaignTask := &entity.OpenCampaignTask{}
	if err := d.db.First(openCampaignTask, id).Error; err != nil {
		return nil, err
	}
	return openCampaignTask, nil
}

func (d *openCampaignTask) GetAll() ([]*entity.OpenCampaignTask, error) {
	var openCampaignTasks []*entity.OpenCampaignTask
	if err := d.db.Find(&openCampaignTasks).Error; err != nil {
		return nil, err
	}
	return openCampaignTasks, nil
}

func (d *openCampaignTask) Update(openCampaignTask *entity.OpenCampaignTask) error {
	if err := d.db.Save(openCampaignTask).Error; err != nil {
		return err
	}
	return nil
}

func (d *openCampaignTask) Delete(id int) error {
	if err := d.db.Delete(&entity.OpenCampaignTask{}, id).Error; err != nil {
		return err
	}
	return nil
}

func (d *openCampaignTask) GetAllByCampaignID(id int) ([]*entity.OpenCampaignTask, error) {
	var openCampaignTasks []*entity.OpenCampaignTask
	if err := d.db.Where("open_campaign_id = ?", id).Find(&openCampaignTasks).Error; err != nil {
		return nil, err
	}
	return openCampaignTasks, nil
}

func (d *openCampaignTask) GetAllUnverifiedParticipants(id int) ([]*entity.OpenCampaignParticipant, error) {
	var openCampaignTasks []*entity.OpenCampaignParticipant
	if err := d.db.Where("open_campaign_task_id = ? AND status = ?", id, "pending").Find(&openCampaignTasks).Error; err != nil {
		return nil, err
	}
	return openCampaignTasks, nil
}

func (d *openCampaignTask) UpdateProofStatus(task_id, user_id int, status string) error {
	if err := d.db.Table("open_campaign_participants").
		Where("user_id = ? AND open_campaign_task_id = ?", user_id, task_id).
		Update("status", status).Error; err != nil {
		return err
	}
	return nil
}