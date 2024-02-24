Feature: Login

    Scenario: Should be logged in to the platform
        Given the user visits the login page
        When the user enter their credentials
        And the user clicks on login button
        Then the user is redirected to the homepage