package entity

type Coordinate struct {
	ID        int     `json:"id" gorm:"type:INT;NOT NULL;AUTO_INCREMENT;PRIMARY_KEY"`
	Latitude  float64 `json:"latitude"`
	Longitude float64 `json:"longitude"`
}
