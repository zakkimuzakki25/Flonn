package entity

type Classis struct {
	ID              int    `json:"id" gorm:"type:INT;NOT NULL;AUTO_INCREMENT;PRIMARY_KEY"`
	Name            string `json:"name" gorm:"type:VARCHAR(255);NOT NULL"`
	Characteristics string `json:"characteristics" gorm:"type:VARCHAR(255);default:null"`
	DiovisioID      int    `gorm:"type:INT;default:null"`
	PhylumID        int    `gorm:"type:INT;default:null"`
	KingdomID       int
	Ordo            []Ordo
}
