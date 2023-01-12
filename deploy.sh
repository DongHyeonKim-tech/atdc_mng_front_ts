set -e
CONTAINER_ID=$(docker ps -al --filter name=atcd_mng_ts -q)
NGINX_CONTAINER_ID=$(docker ps -al --filter name=deploy_nginx -q)
IMAGE_ID=$(docker images --filter=reference="react-nginx" -q)
NGINX_IMAGE_ID=$(docker images --filter=reference="atcd_mng_ts-nginx" -q)
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
  docker rmi $IMAGE_ID
fi
if [ "$NGINX_CONTAINER_ID" != "" ];then
  docker stop NGINX_CONTAINER_ID
  docker rm NGINX_CONTAINER_ID
fi
if [ "$NGINX_IMAGE_ID" != "" ];then
  docker rmi NGINX_IMAGE_ID
fi


docker build -t react-nginx:latest -f ./dockers/Dockerfile .
docker build -t deploy_nginx:latest -f ./dockers/Dockerfile_nginx .
#docker run -d --name atdc_mng_front_ts -p 8300:80 react-nginx:latest
docker-compose -f ./docker-compose.yml up -d --build
