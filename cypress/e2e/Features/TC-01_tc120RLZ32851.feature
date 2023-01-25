Feature: Help Icon

    Scenario:Verify the Help Icon Updated with latest styles in Dashboard Page
        Given Teacher launche the Realize login Page
        When Teacher enters valid username and password
        Then Teacher Verify the Realize Dashboard Page
        And Verify the Help Icon displayed or not
        And Teacher clicks Help Icon
        Then Teacher Verify the popup list displayed or not
        When Teacher enters some value in the inputbox
        And Teacher hits enter
        Then Teacher Verify the result
        And User close the popup
        And Teacher clicks Help Icon
        And Teacher clicks Help for this Page
        Then Teacher Verify the result for help for this page option
        And User close the popup
        And Teacher clicks Help Icon
        And Teacher clicks Program Training option
        Then Teacher Verify the url for Program Training
        And User navigating to home page
        And Teacher clicks Help Icon
        And Teacher clicks Technical Support option
        Then Teacher Verify the url for Technical Support
        And User navigating to home page
        And Teacher clicks Help Icon
        And Teacher clicks Contact a Program Specialist option
        Then Teacher Verify the url for Contact a Program Specialist



