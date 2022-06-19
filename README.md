# Catsignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

Project has 0 (working) tests.

## Quick start
Install [Angular CLI](https://github.com/angular/angular-cli) globally first.

```shell
$ git clone https://github.com/SamirMokiem/Catsignment.git
$ cd Catsignment
$ npm i
$ ng serve
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Structure
```text
|-- ./src
|   |-- ./src/environments
|   |   |-- **Enviroment based configuration files**
|   |-- ./src/index.html **Main app entry**
|   |-- ./src/assets
|   |   |-- ./src/assets/images
|   |   |   |-- **all image type files**
|   |   `-- ./src/assets/scss
|   |       |-- **all scss type files, Only globally used files**
|   |-- ./src/services
|   |   |-- ./src/services/userservice
|   |   |   `-- ./src/services/userservice/userService.ts **User service to handle session based data**
|   |   `-- ./src/services/thecatapi
|   |       |-- ./src/services/thecatapi/TheCatApiService.ts
|   |       |   ...
|   |       `-- **Custom http wrapper for TheCatApi**
|   `-- ./src/app
|       |-- ./src/app/components
|       |   |-- **All reusable components**
|       |-- ./src/app/views
|       |   |-- **All views (used in routes.ts)**
|       |-- ./src/app/routes.ts **All routes used in the app**
|       `-- ./src/app/apikey.interceptor.ts **(auto loaded) "Inject" api key in http request headers"**
`-- ./README.md
```
