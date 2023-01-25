Feature: Verify square class card for Student user(Users with 4 or more classes)


    Scenario:Verify square class card for Student user(Users with 4 or more classes)
        Given User launche the Realize login Page
        When User enters valid username and password5
        Then User Verify the Realize Dashboard Page
        Then User verifies Class name should be displayed on each of my cards
        Then User verifies Background each of myCards
        Then class picture set on each class card
        #Then User verifies Square class cards is displayed two in a row or not
       # Then User verifies Original picture "Assignments","Discuss","Programs" fill the whole container or not
        And User Click the "Pen and Paper" icon
        Then User verifies which navigating to Assignment listing page or not
        And User navigating to home page
        And User Click the "People" icon
        Then User verifies which navigating to Class Discussions page for that class or not
        And User navigating to home page
        And User Click the "Graph" icon
        Then User verifies that link navigated to the Class Results by Assignment page for that class or not
         And User navigating to home page
        And User Click the "Book" icon Dropdown
       Then User verifies that display the programs associated with the class
