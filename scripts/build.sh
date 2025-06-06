#!/usr/bin/env bash

set -e
source "$(dirname "$(realpath "$0")")/common.sh"

check_triggered_by_make
load_env_vars

if [ "$1" != "dev" ] && [ "$1" != "prod" ]; then
    printf "${RED}Usage: $0 <dev|prod>${RESET}\n"
    exit 1
fi

arch=$(uname -m)

for service in api-server frontend scheduler; do
    if [ "$service" == "scheduler" ]; then
        cd ./api-server
    else
        cd ./$service
    fi
    if [ "$1" == "prod" ]; then
        docker build -t "$DOCKER_USERNAME/$service:$1" --target "$1"_final -f ./Dockerfile --platform linux/x86_64 .
    else
        docker build -t "$DOCKER_USERNAME/$service:$1" --target "$1"_final -f ./Dockerfile --platform linux/$arch .
    fi
    cd ..
done
