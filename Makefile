.PHONY: buildDev
buildDev:
	docker build --tag metatoc-ui-dev:latest --build-arg tag=dev  .

.PHONY: buildPro
buildPro:
	docker build --tag metatoc-ui-pro:latest --build-arg tag=pro .

.PHONY: runDev
runDev:
	docker run --name metatoc-ui-dev --rm -d -p 80:80 -e proxy_pass=http://172.22.50.211:5000 metatoc-ui-dev:latest

.PHONY: runPro
runPro:
	docker run --name metatoc-ui-pro --rm -d -p 80:80 -e proxy_pass=http://172.22.50.211:5000 metatoc-ui-pro:latest

.PHONY: stopDev
stopDev:
	docker stop metatoc-ui-dev

.PHONY: stopPro
stopPro:
	docker stop metatoc-ui-pro

.PHONY: pushDev
pushDev:
	docker tag metatoc-ui-dev:latest harbor.dev.21vianet.com/metatoc/metatoc-ui-dev:latest
	docker push harbor.dev.21vianet.com/metatoc/metatoc-ui-dev:latest

.PHONY: pushPro
pushPro:
	docker tag metatoc-ui-pro:latest harbor.dev.21vianet.com/metatoc/metatoc-ui-pro:latest
	docker push harbor.dev.21vianet.com/metatoc/metatoc-ui-pro:latest