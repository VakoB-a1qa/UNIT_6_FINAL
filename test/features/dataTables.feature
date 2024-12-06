Feature: Data Tables

    Scenario: The Data Table shows expected data
        Given user can visit the main page
        When user clicks 'Sortable Data Tables' link
        Then Example 1 table's 'Due' column sums up to 251
