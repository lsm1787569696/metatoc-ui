.PHONY: buildDev
buildDev:
	docker build metatoc-ui-dev:latest --build-arg tag=dev .
ifneq ($(dtag),)
	docker tag metatoc-ui-dev:latest harbor.dev.21vianet.com/metatoc/metatoc-ui-dev:$(dtag)
endif

.PHONY: buildPro
buildPro:
	docker build metatoc-ui-pro:latest --build-arg tag=dev .
ifneq ($(dtag),)
	docker tag metatoc-ui-pro:latest harbor.dev.21vianet.com/metatoc/metatoc-ui-pro:$(dtag)
endif

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
ifneq ($(dtag),)
	docker push harbor.dev.21vianet.com/metatoc/metatoc-ui-dev:$(dtag)
endif

.PHONY: pushPro
pushPro:
ifneq ($(dtag),)
	docker push harbor.dev.21vianet.com/metatoc/metatoc-ui-pro:$(dtag)
endif

.PHONY: cleanDev
cleanDev:
	docker rmi -f metatoc-ui-dev:latest
ifneq ($(dtag),)
	docker rmi -f harbor.dev.21vianet.com/metatoc/metatoc-ui-dev:$(dtag)
endif

.PHONY: cleanPro
cleanPro:
	docker rmi -f metatoc-ui-pro:latest
ifneq ($(dtag),)
	docker rmi -f harbor.dev.21vianet.com/metatoc/metatoc-ui-pro:$(dtag)
endif