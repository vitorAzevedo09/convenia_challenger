## Technical Assessment Implementation - Convenia Front-end

### Description

Implementation of the [Convenia](https://www.convenia.com.br/) front-end [technical assessment](challenger-description.md) for the Front-end Junior Developer position.

The currency quoting API used in this project is [Swop](https://swop.cx/).
Please create an account for usage in this project. While the premium version is desired, the application also works with free account without additional configuration steps.
However, the conversion between USD -> BRL is based in the equivalent calculation (EUR -> BRL, EUR -> USD).
Therefore, the calculation may be uncertain due to the black-box nature of how the API handles decimal places.

#### Technologies and Libraries Used For Version Vue 2

- NodeJs
- VueJs
- Vuex
- Apollo GraphQL
- SCSS
- Firebase Tools (CLI)
- Cypress
- Jtest
- Docker

the deployed versin can be accessed in: [Version Vue 2](https://convenia-challenger.web.app/) deployed in firebase. 
If you wanna run the project locale, or more informations about test, please read the [vue 2 version documentation](./letip/README.md)

#### Author notes
Some issues, problems or discussion about the project

##### About e2e tests

 - E2E **in BRL** result calculations maybe return error because in test i calculating with fixed value and in the project code i retrieving from a sequence of calculations: decimal places issue.
 - E2E test with cypress in Case Four Dolar/Euro its given an error in **Per person** test, please check the calculation on [convenia examples](challenger-description.md)
 - E2E test with cypress in Case Three Dolar/Euro its given an error in **Per person** test, please check the calculation on [convenia examples](challenger-description.md)


### Author

Vitor Azevedo Silva

[LinkedIn Profile](https://www.linkedin.com/in/vitor-azevedo-180999161/)
```
