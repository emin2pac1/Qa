# Installation

## Prerequisites
**php 8.1+**<br/>
**composer**<br/>
**git**<br/>
**nodejs**<br/>
**npm**<br/>

## Cloning the repository

```bash
git clone 
```

## Copy environment variables

```bash
cp .env.example .env
```

## Installing php dependencies

```bash
composer install
```

## Installing npm dependencies

```bash
npm install
```

## Linking the storage directory

```bash
php artisan storage:link
```


## Create database
create database and change environment variables in .env file

```php
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=karajkom
DB_USERNAME=root
DB_PASSWORD=
```

## Migrating database and seeders

```bash
php artisan migrate --seed
```


## Running the application

```bash
npm run dev
```
```bash
php artisan serve
```
