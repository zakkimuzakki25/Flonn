package entity

type Habitat struct {
	ID           int    `json:"id" gorm:"type:INT;NOT NULL;AUTO_INCREMENT;PRIMARY_KEY"`
	Name         string `json:"name" gorm:"type:VARCHAR(255);NOT NULL"`
	Description  string `json:"description" gorm:"type:VARCHAR(255);default:null"`
	Biodiversity []Biodiversity
}
