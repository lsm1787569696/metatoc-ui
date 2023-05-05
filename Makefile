.PHONY: build
build:
	docker build --tag metatoc-ui:latest .

.PHONY: run
run:
	docker run --name metatoc-ui --rm -d -p 80:80 metatoc-ui:latest

.PHONY: stop
stop:
	docker stop metatoc-ui

.PHONY: pushDev
pushDev:
	docker tag metatoc-ui:latest harbor.dev.21vianet.com/metatoc/metatoc-ui:latest
	docker push harbor.dev.21vianet.com/metatoc/metatoc-ui:latest
