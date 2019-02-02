Main 
 base
 classes placed into "shared/" directory. While creation (test-offer) you should create directory into "assets/test-offer/"

(it
 should contain at least 1 json with translation (possible to be empty) - "assets/test-offer/translations/vocabulary_en.json").

-
 Implement offer module: attach routing and all the dependencies (can be found in the example offer).

-
 Implement 1 service (to attach JS and CSS to the offer)

-
 Attach 3 components (sign-up, opt-in и reg-form). Components should extend from "basic-".


Also
 need properly fill up "environment.ts" like it's done in the example offer.


Application
 should have 2 pages: main landing and after submitting opt-ip form user should see sign-up form.


Application
 should be fully responsive for mobile and desktop. 

Burger
 menu should be used for the mobile version.


# SG

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
