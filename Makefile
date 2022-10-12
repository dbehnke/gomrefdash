ARCH=$(shell arch)
UNAME=$(shell uname)
SHORTHASH=$(shell git rev-parse --short HEAD)
VERSION=$(shell cat VERSION)-$(SHORTHASH)
FILEVERSION=$(VERSION)-$(UNAME)-$(ARCH)
DOCKERTAG=gomrefdash

all: gomrefdash

.PHONY: version
version:
	echo $(VERSION)

gomrefdash:
	GOOS=$(GOOS) GOARCH=$(GOARCH) GOARM=$(GOARM) go build -o gomrefdash -ldflags "-X main.dver=$(VERSION)"

.PHONY: package
package: gomrefdash gomrefdash-$(FILEVERSION).tar.gz

gomrefdash-$(FILEVERSION).tar.gz: gomrefdash
	tar cfz gomrefdash-$(FILEVERSION).tar.gz gomrefdash templates static .env.sample

.PHONY: docker
docker:
	docker build -t $(DOCKERTAG) .

.PHONY: docker-clean
docker-clean:
	-docker image rm $(DOCKERTAG)

.PHONY: docker-multi
docker-multi:
	docker buildx build --platform linux/arm/v7 -t $(DOCKERTAG):$(VERSION)-armv7 .
	docker buildx build --platform linux/amd64 -t $(DOCKERTAG):$(VERSION)-amd64 .
	docker tag $(DOCKERTAG):$(VERSION)-armv7 $(DOCKERTAG):armv7
	docker tag $(DOCKERTAG):$(VERSION)-amd64 $(DOCKERTAG):amd64
	docker push $(DOCKERTAG):$(VERSION)-armv7
	docker push $(DOCKERTAG):armv7
	docker push $(DOCKERTAG):$(VERSION)-amd64
	docker push $(DOCKERTAG):amd64
	

.PHONY: docker-compose-up
docker-compose-up:
	docker-compose up -d
	docker-compose logs -f

.PHONY: docker-compose-down
docker-compose-down:
	docker-compose down

.PHONY: docker-compose-logs
	docker-compose logs -f

.PHONY: run
run:
	go run -ldflags "-X main.dver=$(VERSION)" *.go

.PHONY: clean
clean:
	-rm gomrefdash
	-rm -f gomrefdash-$(FILEVERSION).tar.gz
