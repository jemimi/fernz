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
