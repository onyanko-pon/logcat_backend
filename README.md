
[Dockerhub](https://hub.docker.com/r/onyankopon/logcat)

## build

### Docker

```sh
$  docker run --name logcat -p 3000:3000 -v sample.log:/usr/src/app/sample.log onyankopon/logcat
```

### logcat.config.json

You should set target log files info to `logcat.config.json` 


### env

- LOGCAT_CONFIG_PATH: path to locat.confg.json  