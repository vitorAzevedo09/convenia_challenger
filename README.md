## Technical Assessment Implementation - Convenia Front-end

### Description

Implementation of the [Convenia](https://www.convenia.com.br/) front-end [technical assessment](challenger-description.md) for the Front-end Junior Developer position.

The currency quoting API used in this project is [Swop](https://swop.cx/).
Please create an account for usage in this project. While the premium version is desired, the application also works with free account without additional configuration steps.
However, the conversion between USD -> BRL is based in the equivalent calculation (EUR -> BRL, EUR -> USD).
Therefore, the calculation may be uncertain due to the black-box nature of how the API handles decimal places.

the deployed versin can be accessed in: [https://convenia-challenger.web.app/](https://convenia-challenger.web.app/) deployed in firebase. 

## Table of Contents

- [Technologies and Libraries](#technologies-and-libraries)
- [How to Run](#how-to-run)
  - [Docker](#docker)
  - [Package Manager](#package-manager)
- [How to Run Tests](#how-to-run-tests)

#### Technologies and Libraries

- NodeJs
- VueJs
- Vuex
- Apollo GraphQL
- SCSS
- Firebase Tools (CLI)
- Cypress
- Jtest
- Docker

## How to Run

### Docker

To run the Vue.js application using Docker, follow these steps:

1. Ensure that Docker is installed on your machine.

2. Clone the repository:

    ```bash
    git clone git@github.com:vitorAzevedo09/convenia_challenger.git #clone with ssh
    ```

3. Navigate to the project directory:

    ```bash
    cd convenia_challenger/letip
    ```
4. Copy the `.env.example` file and rename it to `.env`, then fill the **VUE_APP_SWOP_API_KEY** variable:

    ```bash
    cp .env.example .env
    ```
5. Build the Docker image:

    ```bash
    docker build -t your-image-name .
    ```

6. Run the Docker container:

    ```bash
    docker run -p 8080:8080 your-image-name
    ```

7. Open your browser and go to [http://localhost:8080/](http://localhost:8080/) to view the application.

### Package Manager

To run the Vue.js application using a package manager (e.g., npm or yarn), follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/vitorAzevedo09/convenia_challenger.git
    ```

2. Navigate to the project directory:

    ```bash
    cd convenia_challenger/letip
    ```
    
3. Copy the `.env.example` file and rename it to `.env`, then fill in the necessary variables:

    ```bash
    cp .env.example .env
    ```

4. Install dependencies:

    ```bash
    npm install --legacy-peer-deps # please be sure about legacy deps, maybe you prefer to resolve manually the conflicts
    # or
    yarn install
    ```

5. Run the application:

    ```bash
    npm run serve
    # or
    yarn serve
    ```

6. Open your browser and go to [http://localhost:8080/](http://localhost:8080/) to view the application.

## How to Run Tests

To run unit tests with mockup data, use the following commands:

```bash
npm run test:unit
# or
yarn test:unit
```
To run e2e tests with mockup data, use the following commands:

```bash
npm run test:e2e
# or
yarn test:e2e
```

#### Author notes
Some issues, problems or discussion about the project

##### About e2e tests

 - E2E **in BRL** result calculations maybe return error because in test i calculating with fixed value and in the project code i retrieving from a sequence of calculations: decimal places issue.

### Author

Vitor Azevedo Silva

[LinkedIn Profile](https://www.linkedin.com/in/vitor-azevedo-180999161/)
```
