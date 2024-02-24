class Login {
  open() {
    return cy.visit("https://practicetestautomation.com/practice-test-login/");
  }

  verifyUrl() {
    return cy
      .url()
      .should("include", "practicetestautomation.com/practice-test-login");
  }

  vaerifyusername() {
    return cy.get("[name=username]");
  }

  verifypassword() {
    return cy.get("[name=password]");
  }

  submit() {
    return cy.get("#submit");
  }

  dashboard() {
    return cy
      .url()
      .should(
        "include",
        "https://practicetestautomation.com/logged-in-successfully/"
      );
  }

  myusername() {
    return cy.get("[name=username]");
  }

  mypassword() {
    return cy.get("[name=password]");
  }

  mysubmit() {
    return cy.get("#submit");
  }
}

export default Login;
