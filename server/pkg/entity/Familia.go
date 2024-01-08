package entity

type Familia struct {
	ID              int    `json:"id" gorm:"type:INT;NOT NULL;AUTO_INCREMENT;PRIMARY_KEY"`
	Name            string `json:"name" gorm:"type:VARCHAR(255);NOT NULL"`
	Characteristics string `json:"characteristics" gorm:"type:VARCHAR(255);default:null"`
	Genus           []Genus
	OrdoID          int
}
