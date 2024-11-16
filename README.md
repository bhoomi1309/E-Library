# E-Library

## Overview

The E-Library is a web-based application designed to manage and access a collection of books in a digital format. It allows users to view books, add new books, update book details, and delete books. The system uses MongoDB to store book information and provides a RESTful API built with Express.js.

## Features

- View a list of all books
- View detailed information about a specific book
- Add new books to the library
- Delete books from the library
- Search books by Title

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: React.js
- **Database**: MongoDB
- **Environment Variables**: `dotenv` for managing configuration
- **CORS**: Enable Cross-Origin Resource Sharing (CORS)
- **Body Parser**: To handle JSON and URL-encoded data in HTTP requests

## Installation

### Prerequisites

Before you begin, ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use MongoDB Atlas for a cloud solution)

### Clone the Repository

```bash
git clone https://github.com/your-username/e-library.git
cd Elibrary
```


### Set Up Environment Variables
Create a .env file in the root of your project and add the following configuration:

```bash
connectionString=your-mongodb-connection-string
```


### Install Dependencies
Run the following command to install all necessary dependencies:


```bash
npm install
```


### Start the server

```bash
cd backend
node server.js
```


### Run client side


```bash
cd client
npm start
```

