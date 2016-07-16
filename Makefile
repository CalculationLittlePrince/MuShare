install:
	go install

run-prod:
	npm-install
	MARTINI_ENV=production go run app.go

run-dev:
	npm-install-dev
	MARTINI_ENV=development go run app.go

run-test:
	npm-install-dev
	MARTINI_ENV=test go run app.go

test:
	go test

npm-install:
	npm install --producation
	bower install

npm-install-dev:
	npm install
	bower install

