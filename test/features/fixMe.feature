Feature: Unit 5 survey

    Scenario: checking if login functionality works properly
        When I navigate to testing website
        Then Main page is open
        When I click on 'Sample App'
        Then The page is Open
        When I enter username from env file
        And I enter password from env file
        And I click 'Log In' button
        Then Welcome message is displayed