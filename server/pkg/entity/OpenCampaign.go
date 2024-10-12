package entity

import "gorm.io/gorm"

type OpenCampaign struct {
	gorm.Model
	Title             string             `json:"title"`
	Purpose           string             `json:"purpose"`
	Photo             string             `json:"photo"`
	Highlight         string             `json:"highlight"`
	WhyText           string             `json:"why_text"`
	Steps             string             `json:"steps"`
	StepsPhoto        string             `json:"steps_photo"`
	Keterangan        string             `json:"keterangan"`
	OpenCampaignTasks []OpenCampaignTask `json:"open_campaign_tasks" gorm:"foreignKey:open_campaign_id;constraint:OnDelete:CASCADE;"`
}

type OpenCampaignTask struct {
	gorm.Model
	OpenCampaignID uint                      `json:"open_campaign_id"`
	Title          string                    `json:"title"`
	Photo          string                    `json:"photo"`
	FlointReward   int                       `json:"floint_reward"`
	Participants   []OpenCampaignParticipant `json:"participants" gorm:"foreignKey:open_campaign_task_id;constraint:OnDelete:CASCADE;"`
}

type OpenCampaignParticipant struct {
	OpenCampaignTaskID uint   `json:"open_campaign_task_id" gorm:"primaryKey"`
	UserID             uint   `json:"user_id" gorm:"primaryKey"`
	Photo              string `json:"photo"`
	Status             string `json:"status" gorm:"default:'pending'"`
}

type OpenCampaignResponse struct {
	ID                uint               `json:"id"`
	Title             string             `json:"title"`
	Purpose           string             `json:"purpose"`
	Photo             string             `json:"photo"`
	Highlight         string             `json:"highlight"`
	WhyText           string             `json:"why_text"`
	Steps             string             `json:"steps"`
	StepsPhoto        string             `json:"steps_photo"`
	Keterangan        string             `json:"keterangan"`
	TotParticipants   int                `json:"tot_participants"`
	OpenCampaignTasks []OpenCampaignTask `json:"open_campaign_tasks"`
}
