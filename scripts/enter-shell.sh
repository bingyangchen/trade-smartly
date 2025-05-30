#!/usr/bin/env bash

set -e
source "$(dirname "$(realpath "$0")")/common.sh"

check_triggered_by_make
validate_service $1
load_env_vars
clear_screen

# NOTE: For db and redis, a newly created container would not be able to connect to
#       the running postgres/redis. So we use 'exec' to get a shell in the existing
#       container instead of creating a new one.
if [ "$1" = "db" ]; then
    echo "Opening psql..."
    docker compose -f compose.$ENV.yaml --progress quiet exec $1 psql -U $DB_USER -d $DB_NAME
elif [ "$1" = "redis" ]; then
    echo "Opening redis-cli..."
    docker compose -f compose.$ENV.yaml --progress quiet exec $1 redis-cli
else
    docker compose -f compose.$ENV.yaml --progress quiet run --rm $1 bash
fi
