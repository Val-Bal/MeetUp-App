# MeetUp-App

## Project description
This is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique. The app uses the Google Calendar API to fetch upcoming events and allows users to filter events by city, show/hide event details, specify the number of events, use the app offline, add an app shortcut to the home screen, and view a chart showing the upcoming events by city.

## Use of serverless functions
- Frontend: Written with JavaScript/React; hosted on GitHub Pages.
- Backend (Server Logic): Written with Node/Express as Lambda functions (FaaS); hosted on AWS (requests come from frontend to Lambda function to data).
- Backend (Database): Google Calendar API.

## Key Features and user stories
- Filter events by city
- Show/hide event details
- Specify number of events
- Use the app when offline
- Add an app shortcut to the home screen
- View a chart showing the upcoming events by city

### Feature 1 - Filter events by city:

As a user
I should be able to “filter events by city”
So that I can see the list of events that take place in that city

Scenario 1 - When user hasn’t searched for a city, show upcoming events from all cities:
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

Scenario 2 - User should see a list of suggestions when they search for a city:
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed

Scenario 3 - User can select a city from the suggested list:
Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city

### Feature 2 - Show/hide event details:

As a user,
I should be able to expand/hide an event to see/hide its details and 
So that I can have more/less information about the event. 

Scenario 1 - An event element is collapsed by default:
Given the user is viewing the main page
When the user doesn’t clicks on an event element
Then the event's details should be hidden. 

Scenario 2 - User can expand an event to see its details:
Given the user has selected an event
When the user clicks on the event element again
Then the event's details should expand showing the additional information.

Scenario 3 - User can collapse an event to hide its details:
Given the user has selected an event
When the user clicks on the event element again
Then the details of the event will be hidden. 
 
### Feature 3 - Specify number of events:

As a user,
I should be able to change the number of events I want to see
So that I can see more or fewer events depending on my needs.

Scenario 1 - When user hasn’t specified a number, 32 is the default number:
Given the user is viewing a list of events
When the user hasn't specified a number of events to be displayed
Then the user should see 32 events by default.

Scenario 2 - User can change the number of events they want to see:
Given the user is viewing a list of events
When the user changes the number of events he/she wants to see
Then the list should update to show the specified number of events.

### Feature 4 - Use the app when offline:

As a user,
I should be able to use the app when offline
So that I can view the events even when there’s no internet connection.

Scenario 1 - Show cached data when there’s no internet connection:
Given the user has viewed events previously with an internet connection
When the user opens the app without an internet connection
Then the user should see cached data of the previously viewed events.

Scenario 2 - Show error when user changes the settings (city, time range):
Given the user is using the app offline
When the user tries to change the settings (city or time range)
Then the user should see an error message indicating that the settings cannot be changes when offline.

### Feature 5 - data visualization:

As a user,
I should be able to see a chart with the number of upcoming events in each city
So that I can quickly see what and how many events are organized in which city.

Scenario 1 - Show a chart with the number of upcoming events in each city:
Given the user is viewing the main page of the app
When the user scrolls down to the data visualization section
Then the user should see a chart displaying the number upcoming events in each city.


## Technology used
- React
- AWS Lambda (for serverless functions)
- Google Calendar API and OAuth2 authentication flow
- GitHub Pages (for deployment)
- Recharts (for data visualization)
- Axios (for API calls)
- Jest and Enzyme (for testing)
- ESLint (for code linting)
- Prettier (for code formatting)

## Project dependencies
- "@testing-library/jest-dom": "^5.16.5",
- "@testing-library/react": "^12.1.2",
- "@testing-library/user-event": "^14.4.3",
- "react": "^17.0.2",
- "react-dom": "^17.0.2",
- "react-scripts": "5.0.1",
- "web-vitals": "^2.1.4",
- "workbox-background-sync": "^6.5.4",
- "workbox-broadcast-update": "^6.5.4",
- "workbox-cacheable-response": "^6.5.4",
- "workbox-core": "^6.5.4",
- "workbox-expiration": "^6.5.4",
- "workbox-google-analytics": "^6.5.4",
- "workbox-navigation-preload": "^6.5.4",
- "workbox-precaching": "^6.5.4",
- "workbox-range-requests": "^6.5.4",
- "workbox-routing": "^6.5.4",
- "workbox-strategies": "^6.5.4",
- "workbox-streams": "^6.5.4"

## API used
- Google Calendar API
