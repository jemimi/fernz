# Weekly Task List

## Task List

- Product detials
- frontend/backend workflow
- fetching products from React
- setup Nodemon and concurrently
- MongoDB Atlas & compass setup

## Learning Curve

Understanding the workflows between frontend and backend.
Understanding react routers  
localhost:3000 = frontend  
localhost:5000 = backend

Setting up Nodemon & Concurrently:
concurrently connects the backend and front end together. Need to write scripts let concurrently what to do:  
 "dev": "concurrently \"npm run server\" \"npm run client\""

Nodemon listens to server and updates automatically. Need to add the following in package.json:

"server": "nodemon backend/server",
"client": "npm start --prefix frontend",

Reviewing GET, POST, PUT and DELETE

### Learning resources:

udemy course - ecommerce on the MERN stack


Week 5

 Add MongoDB Atlas

Challenges: 
After connecting the backend and front-end servers together with the installation of nodemon and concurrently (npm dependencies),  starting the app by typing "npm run server" in the terminal at the root folder would cause nodemon to crash. And only the front-end server would work and show in the browser. 
I resolved this bug by adding the line in the package.json file at the root level. 
"type": "module", 

Now it works. The "type": "module" allows the file name to have a .js extenstion instead of a .mjs

Week 6-7
Challenges: 
Trying to self-learn the MERN stack was an ambitious endeavor.  With the team code base that was built by Sandra, Journey and Asia, I spent much time trying to understand the code base including the routes, the folder structure, useStates, props etc. I attempted to add a new review component but the site would fail to compile.  I also tried multiple times to refactor the code to display the homepage with react bootstrap styling. I implemented the Card feature from React Bootstrap to display in a single vertical line but was not able to get it to display as 3 columns (i.e Cards) on each Row. However, after refactoring the code in the index.js and destructuring the code in the list-listing.js file, some of the links in the header did not work. 

As a result, I scaled back my learning to React. I worked on a separate small-scale React application with json file as the data source. 




