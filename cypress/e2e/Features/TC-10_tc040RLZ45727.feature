Feature: Verify new TOC page is displayed while clicking on any program in My Programs section  for  Admin  user when show.browse.navbar.integration='ON

    Scenario:Verify new TOC page is displayed while clicking on any program in My Programs section  for  Admin  user when show.browse.navbar.integration='ON
        Given User launche the Realize login Page
       When User Logins Savvas as Admin user
       Then User Verify the Realize Dashboard Page
       And User clicks on any Program in My Program section
       Then User verifies new TOC page is displayed or not
        