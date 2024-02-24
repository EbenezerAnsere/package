/// <reference types="cypress" />

const {
  When,
  Then,
  Given,
  And,
} = require("cypress-cucumber-preprocessor/steps");

import Login from "./page_object_model/login";

const login = new Login();

const myNsername = "student";
const myPassword = "Password123";

Given("the user visits the login page", () => {
  login.open();
  login.verifyUrl();
});

When("the user enter their credentials", () => {
  login.vaerifyusername().type(myNsername);
  login.verifypassword().type(myPassword);
});

And("the user clicks on login button", () => {
  login.submit().click();
});

Then("the user is redirected to the homepage", () => {
  login.dashboard();
});
