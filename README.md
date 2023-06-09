## Stack

- Laravel
- VueJS
- Vuetify
- InertiaJS

## Short and Sweet description:

- Basically a shaved-down JIRA-like issue reporting & tracking system

## Local Dev Setup

* install dependencies
```bash
composer install
npm install
```
* Environment Variables
```
cp .env.example .env
```
* migrations
```bash
php artisan migrate --seed
```
* run server
```bash
php artisan serve
```
* npm watch
```bash
npm run watch
```
* storage
```bash
php artisan storage:link
```

* scheduler
```bash
php artisan schedule:work
```
* job queue
```bash
php artisan queue:work
```
