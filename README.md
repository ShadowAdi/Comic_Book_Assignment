# Comic Book Store Backend

This is the backend for an e-commerce platform to manage and display comic book inventory. It is built using
**Node.js** and **Express.js** with **MongoDB** (or **PostgreSQL/MySQL**) for database management. The API supports CRUD functionality for managing comic books.

## Features
- **Create, Read, Update, Delete (CRUD)** operations for comic books.
- **Pagination**, **filtering**, and **sorting** for inventory listings.
- Retrieve detailed information for a specific comic book.


## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB** 
- **Mongoose** 
- **Postman** for API testing


## Setup and Installation

- Install **Node.js**: [https://nodejs.org/](https://nodejs.org/)
- Install **MongoDB** or your chosen database: [https://www.mongodb.com/](https://www.mongodb.com/)



### Installation Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/ShadowAdi/Comic_Book_Assignment.git
    cd in the folder
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file at the root of your project and add the following:
    ```bash
    PORT=5000
    URI=<your-database-connection-string>
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

### API Documentation
The API endpoints for managing the comic book store are detailed below.

#### Comic Book Management:
1. **Create a Comic Book**  
   `POST /api/v1/addComic/`  
   Example request body:
   ```json
   {
     "bookName": "Spider-Man",
     "authorName": "Stan Lee",
     "yearOfPublication": 1962,
     "price": 29.99,
     "discount": 10,
     "numberOfPages": 36,
     "condition": "new",
     "description": "First appearance of Spider-Man."
   }
2. **Edit A Comic Book**
   `PUT /api/v1/updateComic/:id`  
   Example request body:
   ```json
   {
     "bookName": "Spider-Man-2",
   }
3. **Delete a Comic Book**
   `DELETE /api/v1/deleteComic/:id`

#### Comic Book List
1. **Get All Comic Books**
   `GET /api/v1/getAllComics/`   
2. **Get A Single Comic**
   `GET /api/v1/getComic/:id`

### [**PostMan Collection for the api**](https://www.postman.com/flight-geoscientist-23558502/comicbookcollection/collection/5zbmg2z/comicbook?action=share&creator=29633687)


