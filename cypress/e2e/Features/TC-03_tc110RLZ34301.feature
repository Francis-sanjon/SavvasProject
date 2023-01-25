Feature: Verify FirstName

    Scenario:Verify the UserName displayed on the profile shows the first name without elipsis when it less than X char or pixel for Student user
        Given Teacher launche the Realize login Page
        When Teacher enters valid username and password-3
        Then Teacher Verify the Realize Dashboard Page
        Then User Verify profile is visible or not
        And User clicks profile Icon
        And User clicks Setting Icon
        Then User Verify the first name displayed in the profile Icon
        And user clicks Home Button
        And user clicks Browse Button
        And User clicks Classes Menu
         And User clicks Grades Menu