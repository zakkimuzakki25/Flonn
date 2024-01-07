package repository

import "database/sql"

type UserInterface interface {
}

type user struct {
}

func userRepoInit(db sql.DB) UserInterface {
	return nil
}
