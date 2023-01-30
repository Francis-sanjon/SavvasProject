Feature:Verify scroll bar is displaying for My Programs section if the screen viewport is small (Max is 5 Programs but displaying only 4 programs) for Student user

    Scenario:Verify scroll bar is displaying for My Programs section if the screen viewport is small (Max is 5 Programs but displaying only 4 programs) for Student user
       Given User launche the Realize login Page
       When User Logins Savvas as Student user
       Then User Verify if scroll bar is not displayed in My Programs section
       