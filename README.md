# CSC336: Database Systems - Project 1

## InstaList

Contributors: Gurjit Kaur, Phyo Zaw Hein, and Albert Felix

## App Concept

InstaList is a web application that allows users to create their own personal playlist of their liked songs. After signing up or logging in, users can go to the search bar, look up their favorite songs, albums, or artists, and add them to their playlist by liking them.

## Tools

### Frontend

- ReactJS
- Bootstrap

### Backend

- Postman
- MariaDB
- HeidiSQL

## Instructions

To use the software for this application, first clone the git repository into your own machine. Then, change directories into CSC336-Project1/insta-list/Frontend and install the nodejs dependencies in the local node_modules folder running npm install in the command line. Then, run npm start to get the application running in your local machine. The web application should then open up on a local host on the browser, or you can also head to http://www.localhost:3000. Finally, you can navigate through the different parts of the application using the navigation bar at the top.

The ideal flow of the application would consist of first signing up on the application (or logging in if user is already registered), then heading to the home page to search for songs. As users find song titles they are into, they can click on the "Like Song" button to add them to their personal playlist. When they head to the "My Library" page, they will see all their liked songs there, and be able to unlike a song if they want to.

To verify that the application works, 

#1. Clone the project
#2. Go to the project directory ("insta-list")
#3. Go to "Backend" folder ( to start backend )
#4. Enter "npm install"
#5. Start HeidiSQL, create new datbase named "instalist_db", 
#6. Enter "npm run dev" or "npm start dev" (if one of them does not work, try the other) to set up the database
#7. Enter "npm run seed" to populate the database. If you want to see the data in the tables, use HeidiSQL.
#8. Go to "Frontend" folder ( to start web application)
#9. Enter "npm install"
#10. Enter "npm start"

## Bugs

#1. As the primary keys are set to autoincrement, its best not to set certain value to the primary key.
#2. Sometimes, after sign up,and loading the login page will load into welcome page with wrong name, if that happens please log out and re log in again.


## Resources

## App Demo

## Notes
Next steps for InstaList would be to allow users to be able to search for the playlists of other registered users and see their contents. We also would like users to be able to like the playlists of other users, and create multiple eprsonal playlists and be able to name them.
