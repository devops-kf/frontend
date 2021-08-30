docker run \
    -it \
    --name nistagram-frontend \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3000:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    frontend:1.0