
[Dockerhub](https://hub.docker.com/r/onyankopon/logs-cat)

## build

### Docker

```sh
$  docker run --name logs-cat -p 3000:3000 -v sample.log:/usr/src/app/sample.log onyankopon/logs-cat
```