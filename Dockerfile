FROM golang:latest

RUN go get github.com/tools/godep && go get bitbucket.org/liamstask/goose/cmd/goose

ADD . /go/src/MuShare

WORKDIR /go/src/MuShare

RUN godep restore
RUN go install

ENTRYPOINT MARTINI_ENV=test /go/bin/MuShare

EXPOSE 8080



