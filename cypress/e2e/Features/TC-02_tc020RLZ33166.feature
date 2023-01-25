Feature: Changing language

Scenario:Verify class quick links in Realize Dashboard for spanish user
Given Teacher launche the Realize login Page
When Teacher enters valid username and password
Then Teacher Verify the Realize Dashboard Page
And Teacher clicks profile Icon
And Teacher clicks Setting option
Then Verify Setting page
When Teacher Selects spanish language
And clicks Save Button
And Teacher clicks savvas Realize Icon to go Dashboard page
Then Teacher Verify the below data
And Teacher clicks profile Icon
And Teacher clicks Setting
When Teacher Selects English language
And clicks Save Button
