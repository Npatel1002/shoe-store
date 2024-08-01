# Shoe Store 

**Student Name**: Neel Patel  
**Student Number**: 8968242   
**Student Email**: Npatel8242@conestogac.on.ca  
**Date**: 19/july/2024

## Tech Stack

**Frontend**: ReactJS  
**Backend**: Node.js with Express Framework   
**Database**: MongoDB (Atlas)

## Project Setup

1. **Project Initialization**: Repository created on GitHub and cloned to local machine.
2. **Frontend Setup**: Initialized ReactJS project.
3. **Backend Setup**: Initialized Node.js project with Express and connected to MongoDB (Atlas).

## Database Schema Design

### Products Schema (MongoDB)
- `Id`: Unique id for Product identification
- `name`: String
- `description`: String
- `price`: Number
- `category`: String
- `stock`: Number
- `imageUrl`: String

### Orders Schema (MongoDB)

- `Id`: Unique id for oder identification
- `products`: Array of objects { productId:ObjectId, quantity: Number }
- `totalPrice`: Number
- `orderDate`: Date

## Frontend Setup

1. Basic structure set up for React components, including directories for components and services.
2. State management planned to handle user sessions and cart data.

## Notes

- The project is set up using Git and GitHub for version control.
- Further development will include implementing user interfaces for product listings, shopping cart, and checkout.

###Week 2

1. Install The NodeModules to run the project.
2. Install required Dependencies to run my project .

3. right click on the frontend folder "Shoestore" and open integrated terminal and give command in terminal "npm start".
4. right click on the backend folder "server" and open integrated terminal and give command in terminal "node app.js".

## License[MIT]