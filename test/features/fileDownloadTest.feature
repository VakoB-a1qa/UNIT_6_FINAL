Feature: File Download

    Scenario Outline: User can download File
        Given user can visit the main page
        When I select 'File Download' page
        And I download <file> file
        Then I should see <file> file in downloads folder

        Examples:
            | file |
            | some-file.txt|
