echo 'STOPING ALL CONTAINER'

docker-compose stop

echo 'REMOVE DATA FILES'

sudo rm -rf .mongo

echo 'REMOVE ALL CONTAINER'

docker-compose rm api-uploader

docker-compose rm db-uploader

echo 'REMOVE ALL IMAGES'

docker rmi upload-files-s3_api-uploader