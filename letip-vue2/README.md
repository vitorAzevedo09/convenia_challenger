# Letip Vue 2 Version 

## Description

Letip project builded with vue 2.

## Table of Contents

- [How to Run](#how-to-run)
  - [Docker](#docker)
  - [Package Manager](#package-manager)
- [How to Run Tests](#how-to-run-tests)

## How to Run

### Docker

To run the Vue.js application using Docker, follow these steps:

1. Ensure that Docker is installed on your machine.

2. Clone the repository:

    ```bash
    git clone https://github.com/vitorAzevedo09/convenia_challenger.git
    ```

3. Navigate to the project directory:

    ```bash
    cd letip-vue2
    ```
4. Copy the `.env.example` file and rename it to `.env`, then fill in the necessary variables:

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
    cd letip-vue2
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

To run tests with mockup data, use the following commands:

```bash
npm run test:e2e
# or
yarn test:e2e
