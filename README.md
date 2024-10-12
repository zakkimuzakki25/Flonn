# How to Run Flonn Locally

To run Flonn locally, follow these steps:

## Prerequisites

- [Node.js](https://nodejs.org/) and npm installed on your machine.
- [Go](https://golang.org/) installed on your machine.
- [XAMPP](https://www.apachefriends.org/index.html) with MySQL installed locally.

## Front-End Setup (React with Vite)

1. **Clone the repository** to your local machine:
    ```bash
    git clone https://github.com/zakkimuzakki25/flonn.git
    ```

2. **Navigate to the `client` directory**:
    ```bash
    cd flonn/client
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Create a `.env` file** in the `client` directory and add the following environment variables:
    ```env
    VITE_MAPS_KEY="your-maps-api-key"
    VITE_FIREBASE_API_KEY="your-firebase-api-key"
    VITE_SERVER_URL="http://localhost:8080"
    ```

5. **Run the development server**:
    ```bash
    npm run dev
    ```
    This will start the Vite development server and open Flonn in your default web browser.

## Back-End Setup (Go with MySQL)

1. **Navigate to the `server` directory**:
    ```bash
    cd flonn/server
    ```

2. **Install Go packages**:
    ```bash
    go get
    ```

3. **Create a `.env` file** in the `server` directory and add the following environment variables:
    ```env
    PORT=8080
    DB_USERNAME=your-db-username
    DB_PASSWORD=your-db-password
    DB_DATABASE=flonnDatabase
    DB_HOST=localhost
    DB_PORT=3306
    SECRET_KEY=your-secret-key
    ```
    Adjust the MySQL credentials according to your XAMPP setup.

4. **Run the Go server**:
    ```bash
    go run cmd/app/Main.go
    ```
    This will start the Go server and connect it to the MySQL database.

## Access the Application

Now, you should be able to access Flonn by opening your browser and navigating to:

