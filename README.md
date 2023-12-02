## Technical Assessment Implementation - Convenia Front-end

### Description

Implementation of the [Convenia](https://www.convenia.com.br/) front-end [technical assessment](https://github.com/vitorAzevedo09/convenia_challenger/blob/main/challenger-description.md) for the Front-end Junior Developer position.

The deployment of this application is available at the following link: [https://convenia-challenger.web.app/](https://convenia-challenger.web.app/)

#### Technologies and Libraries Used

- NodeJs
- VueJs
- Vuex
- Apollo GraphQL
- SCSS
- Firebase Tools (CLI)

#### How to Run the Project

Prerequisites: NodeJs (v 20.9.0)

1. Clone the project repository:

```bash
git clone https://gitlab.com/matheuswilliamdev/frontend.git
```

2. After cloning the repository, navigate to the project directory:

```bash
cd frontend
```

3. Inside the project repository, before running the **`npm install`** command, you need to copy the `.env.example` file and rename it to `.env`, then fill in the `VUE_APP_SWOP_API_KEY` variable.

```bash
cp .env.example .env
```

4. After configuring the **.env** file, run the npm command to install all the libraries used in the project, nowadays the vue 2 version is not oficial so we have to run with **--legacy-peer-deps** flag:

```bash
npm install  --legacy-peer-deps
```

5. After the installation of the libraries, you should run the command:

```bash
npm run serve
```

Once the **`npm run serve`** command is executed, the project will be running locally. To view it, access the following URL:

```bash
http://localhost:8080/
```

### Author

Vitor Azevedo Silva

[LinkedIn Profile](https://www.linkedin.com/in/vitor-azevedo-180999161/)
```

I've added SCSS to the list of technologies used. If you have any further adjustments or questions, feel free to let me know!
