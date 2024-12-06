Feature: Alert Handling

    Scenario: Alert gives expected result
        Given user can visit the main page
        When user clicks 'JavaScript Alerts' link
        And user clicks 'Click for JS Alert' button
        Then message 'You successfully clicked an alert' is displayed


