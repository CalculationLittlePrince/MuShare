package main

import (
  "database/sql"
)

// Up is executed when this migration is applied
func Up_20160429130716(txn *sql.Tx) {
  var sql string = "create table if not exists audio ( " +
    "id int(10) unsigned not null auto_increment, " +
    "created_at int(13) unsigned not null, " +
    "updated_at int(13) unsigned not null, " +
    "name varchar(100) not null, " +
    "duration int(10) unsigned, " +
    "audio_url varchar(200) not null, " +
    "image_url varchar(200), " +
    "artist_id int(10) unsigned, " +
    "sheet_id int(10) unsigned not null, " +
    "PRIMARY KEY(id) " + ")"
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
func Down_20160429130716(txn *sql.Tx) {
  var sql string = "drop table audio"
  stmt, err := txn.Prepare(sql)
  if err != nil {
    panic(err.Error())
  }
  _, err = stmt.Exec()

  if err != nil {
    panic(err.Error())
  }
}
