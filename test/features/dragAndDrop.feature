Feature: Drag and Drop

    Background: Open the Main page
        Given I open the Main page
    
    Scenario: Dragging one box to the other one swaps boxes as expected
        When I click 'Drag and Drop' navigation link
        Then 'Drag and Drop' page is opened
        When I drag box A to box B
        Then First box is 'B'
