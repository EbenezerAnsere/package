Feature: Login

    Scenario: Should be logged in to the platform
        Given the user visits the login page
        When the user enter their credentials
        And the user clicks on login button
        Then the user is redirected to the homepage

    Scenario: Should not be able to log in
        When the user enters incorrect username and correct password
        And the user clicks on login button