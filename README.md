<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## Descripcion

Para el proyecto se usa [Nest](https://github.com/nestjs/nest) framework TypeScript.

## Installation de paquetes

```bash
$ npm install
```

## Preparar entorno

### Configurar conexion de BD

```bash
#Modificar conexión de BD, crear archivo .env en la raiz del proyecto
TYPEORM_HOST=localhost
TYPEORM_PORT=5432
TYPEORM_USERNAME=postgres
TYPEORM_PASSWORD=123456
TYPEORM_DATABASE=doous_cal
TYPEORM_SYNCHRONIZE=false
```

### Ejecutar migracion de BD

```bash
#Actualizar migración de scripts (Cuando se realicen modificaciones a las entidades)
#npm run migrations:generate -- ${nombre del archivo}
$ npm run migrations:generate -- init

#Ejecutar los scripts de migraciones en la BD
$ npm run migrations:run
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Personal notes

### Execute Script in DB

```sql
create schema das;

create table das.user
(
    id       serial,
    username varchar(30)  not null,
    password varchar(150) not null,
    active   bool         not null default true,
    constraint pk_user primary key (id)
);
```
### Add environment file .env

```bash
# you need change your database name
TYPEORM_HOST=localhost
TYPEORM_PORT=5432
TYPEORM_USERNAME=postgres
TYPEORM_PASSWORD=123456
TYPEORM_DATABASE=das
TYPEORM_SYNCHRONIZE=false

JWT_TOKEN=123123123
```
