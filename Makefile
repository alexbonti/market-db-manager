DOCKER_IMAGE_NAME ?= alexbonti/market-db-manager

build:
	docker build -t $(DOCKER_IMAGE_NAME) .