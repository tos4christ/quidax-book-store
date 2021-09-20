# Running the quidax bookstore front end locally

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To run this project locally

Enter the project directory, run:

## npm install
-- After the dependencies have been completed, run:

## npm start.
-- This would start the project locally

### Assumptions made
-- I assumed there would not be a need to create a register or login page in order to meet the criteria of this test
   even though, I created registeration, and signing in routes and logic in the backend. Majorly due to time constraint.

## Requirements not covered
-- Due to time constraint, I could not write tests for the page
-- I was not able to properly create the routes for the add to cart button on the index page, as items can only be added to cart
   when a single book is selected from the index page, which takes user to the single page view, the add to cart button here is properly
   routed to add the book item to cart and create an orderId to persist in the database
-- I was not able to create a stretched carousel due to time constraints as part of my TODOs
-- While a search could be made, I was not able to orchestrate the transistion from when a search is conducted to when it is concluded
   when a cursor is inputed into the search, the search page shows and text inputs starts to filter based on text search. You will need to
   go back to home to start using the app again. I could not work on the transitioning due to time constraints
-- I was not able to adjust all the classes of my bootstrap item to accomodate for mobile view. This is due to time constraints, as what is just 
    needed is to update the mobile dimensions to the containers

## Blockers
-- The major blocker I experienced was access to power supply to work on this project full time based on the time alloted to flesh out
    the backend and frontend
-- In addition to electricity, Internet fluctuations and my computer system crashing from time to time due to windows update were part
    of the delays

### Constructive feedback
-- I must say this was a very good challenge, it is a valid way to prove one's ability, what can be improved is the time constraint required
    to complete the project with respect to the harsh conditions in the country Nigeria. All the same, I believe it is very fair and doable 
    given an optimal environment

## Areas that scalability can apply to
-- The storage of Images for this application can be structured and scaled by using image bucket apis to store and retrieve images for the 
    display of the app in order to make the application light in load time and response time.



