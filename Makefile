install:
	go install

run-prod:
	MARTINI_ENV=production go run app.go

run-dev:
	MARTINI_ENV=development go run app.go

run-test:
	MARTINI_ENV=test go run app.go

db-migration-prod:
	goose -env production $(opt)

db-migration-dev:
	goose -env development $(opt)

db-migration-test:
	goose -env test $(opt)

test:
	go test

