set -e
CONTAINER_ID=$(docker ps -al --filter name=atdc_mng_front_ts -q)
IMAGE_ID=$(docker images --filter=reference="react-nginx" -q)
ROOT_DIR=$(dirname $0)/../

#if [ ! -f "$DOCKER_DIR" ]; then
#        >&2 echo "DOCKER_DIR not exists, image tar file reqiured on the path"
#        exit 1
#fi

if [ "$CONTAINER_ID" != "" ];then
  docker stop $CONTAINER_ID
  docker rm $CONTAINER_ID
fi
if [ "$IMAGE_ID" != "" ];then
  docker rmi react-nginx
fi

docker build -t react-nginx:latest .
docker run -d --name atdc_mng_front_ts -p 8300:80 react-nginx:latest

