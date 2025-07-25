# Auth services

An auth services backend service using :

<p align="center"><a href="https://expressjs.com/" target="_blank"><img src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000" width="180"></a></p>

## Requirements

this auth services is currently extended with the following requirements.  
Instructions on how to use them in your own application are linked below.

| Requirement | Version |
| ----------- | ------- |
| Node JS     | 20.10.0 |
| Express JS  | 5.1.0   |
| MySQL       | 8.0.42  |

## Installation

Make sure the requirements above already install on your system.  
Clone the project to your directory and install the dependencies.

```bash
$ git clone https://github.com/wisnuakbara/backend-shieldtag
```

```bash
$ cd backend-shieldtag
```

```bash
$ npm install
```

## Configuration

Copy the .env.example and rename it to .env.

```bash
$ cp .env.example .env
```

Change the config for your local server.

```bash
DB_HOST="localhost"
DB_PORT=3306
DB_USER="root"
DB_PASSWORD=""
DB_DATABASE="shieldtag_db_v1"
DB_DIALECT="mysql"

JWT_SECRET="your-jwt-secret-key"
JWT_EXPIRATION="1h"
```

## Migration

Run the migration.

```bash
$ npm run db:migrate
```

## Running Local Development Server

_this will run server with nodemon enabled_

```bash
$ npm run dev
```
