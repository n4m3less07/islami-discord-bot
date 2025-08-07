#!/bin/bash

echo "deploying  discord bot to production"

if ! command -v docker &> /dev/null; then
    echo "docker is not installed"
    exit 1
fi

COMPOSE_CMD=""
if command -v docker-compose &> /dev/null; then
    COMPOSE_CMD="docker-compose"
elif docker compose version &> /dev/null; then
    COMPOSE_CMD="docker compose"
else
    echo "docker Compose is not installed"
    exit 1
fi

if [ ! -f .env ]; then
    echo ".env file not found"
    exit 1
fi

echo "stopping existing container"
$COMPOSE_CMD down

echo "building and starting the bot"
$COMPOSE_CMD up -d --build

if [ $? -eq 0 ]; then
    echo "bot deployed successfully"
    echo "Container status:"
    $COMPOSE_CMD ps
    echo "To view logs: $COMPOSE_CMD logs -f"
    echo "To stop: $COMPOSE_CMD down"
else
    echo "deployment failed"
    $COMPOSE_CMD logs
    exit 1
fi