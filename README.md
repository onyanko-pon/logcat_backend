
# logcat
web app for catenating log file (I developed for ISUCON)

This web app can do folloings with HTTP
- get the log file data
- empty the log file 

## usage

1. build/run docker container or build with Node.js in the host machine


## build

### logcat.config.json

You should set target log files info to `logcat.config.json` 


### env

- LOGCAT_CONFIG_PATH: path to locat.confg.json default `/usr/src/app/logcat.config.json`

### use Node

- volume log files
- volume `logcat.config.json` or set env LOGCAT_CONFIG_PATH
- build app

```sh
$ yarn install
$ yarn build
$ yarn start
```

### use Docker

- volume log files
- volume `logcat.config.json` or set env LOGCAT_CONFIG_PATH
- build app with docker

example
```sh
$  docker run --name logcat -p 3000:3000 -v sample.log:/usr/src/app/sample.log -v logcat.config.json:/usr/src/app/logcat.config.json onyankopon/logcat
```

[Dockerhub](https://hub.docker.com/r/onyankopon/logcat)