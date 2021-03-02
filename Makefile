DOCKER_REPO := 174522763890.dkr.ecr.us-east-1.amazonaws.com
GIT_HEAD_HASH := $(shell git rev-parse HEAD)
DOCKER_TAG := $(DOCKER_REPO)/engineering_dojo:${GIT_HEAD_HASH}
DOCKER_LATEST_TAG := $(DOCKER_REPO)/engineering_dojo:latest
export DOCKER_TAG=$(DOCKER_REPO)/engineering_dojo:${GIT_HEAD_HASH}

build:
	docker build --pull -t ${DOCKER_TAG} .

test:
	npm run test

ci-test:
	./ci-test.sh

ci-test-clinet:
	docker run --rm -v ${PWD}/output:/app/output/:rw -t ${DOCKER_TAG} npm run ci-test

ci-test-test:
	docker run --rm -v ${PWD}/output:/app/output/:rw \
   --rm -v ${PWD}/node_modules/puppeteer/.local-chromium/linux-515411/chrome-linux/chrome:/app/node_modules/puppeteer/.local-chromium/linux-515411/chrome-linux/chrome/:rw -e CHROME_DEVEL_SANDBOX=/usr/local/sbin/chrome-devel-sandbox -t ${DOCKER_TAG} npm run ci-test

dist:
	docker push ${DOCKER_TAG}

lint:
	npm run lint

fix:
	npm run format

run:
	npm run build
	cd server && node --inspect server.js

start-laptop:
	docker run --rm -it -p 5000:5000 \
	   --env-file ./dev.env \
     -e TX_REDIS_HOST=${TX_REDIS_HOST} \
     -v ${HOME}/.aws:/app/.aws \
	   ${DOCKER_TAG}

list:
	@echo 'Instances:'
	@aws ec2 describe-instances --filters 'Name=tag:Name,Values=prod-engineering_dojo-*' --output text --query 'Reservations[].Instances[].[ [Tags[?Key==`Name`].Value][0][0],LaunchTime,PrivateIpAddress,InstanceId ]' | sort -n -k 2
	@echo 'ELB:'
	@aws elb describe-load-balancers --load-balancer-name 'prod-engineering_dojo-a488ac1b' --output=text | grep --color=auto INSTANCES