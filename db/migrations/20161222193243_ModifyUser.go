
package main

import (
	"database/sql"
)

// Up is executed when this migration is applied
func Up_20161222193243(txn *sql.Tx) {
	var sql string = "alter table users drop " +
	"index phone"
	stmt, err := txn.Prepare(sql)
	if err != nil {
		panic(err.Error())
	}
	_, err = stmt.Exec()

	if err != nil {
		panic(err.Error())
	}
}

// Down is executed when this migration is rolled back
func Down_20161222193243(txn *sql.Tx) {
	var sql string = "alter table users modify " +
	"phone varchar(100) unique"
	stmt, err := txn.Prepare(sql)
	if err != nil {
		panic(err.Error())
	}
	_, err = stmt.Exec()

	if err != nil {
		panic(err.Error())
	}
}
