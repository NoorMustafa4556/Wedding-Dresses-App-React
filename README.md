# Wedding Dresses Management App

A full-stack web application for managing a catalog of wedding dresses. This project provides a complete CRUD (Create, Read, Update, Delete) interface for an administrator to manage the inventory.

The frontend is built with **React** and **Vite** for a fast and modern user experience, while the backend is powered by **Node.js** and **Express.js** to handle API requests and interact with a SQL database.



## ✨ Features

-   **View All Dresses:** Displays all available dresses from the database in a clean, tabular format.
-   **Add a New Dress:** Easily add new dresses to the catalog through a dedicated form.
-   **Update Dress Details:** Modify the information of any existing dress.
-   **Delete a Dress:** Remove a dress from the inventory.

## 🛠️ Tech Stack

-   **Frontend:** React.js, Vite
-   **Backend:** Node.js, Express.js
-   **Database:** SQL (e.g., MySQL, PostgreSQL)
-   **API Client:** Axios (or Fetch API)

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your system:
-   [Node.js](https://nodejs.org/) (which includes npm)
-   A SQL database server (e.g., [XAMPP](https://www.apachefriends.org/index.html) for MySQL)

### Installation & Setup

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/NoorMustafa4556/Wedding-Dresses-App-React.git
    cd Wedding-Dresses-App-React
    ```

2.  **Set Up the Database:**
    -   Start your SQL server (e.g., Apache and MySQL in XAMPP).
    -   Open a database management tool like phpMyAdmin.
    -   Create a new database.
    -   Import the `mydatabase.sql` file (located in the project's root directory) into the newly created database. This will set up the necessary tables and seed initial data.
    -   **Important:** Open the `backend/server.js` file and update the database connection credentials (host, user, password, database name) to match your local setup.

3.  **Set Up and Run the Backend Server:**
    ```bash
    # Navigate to the backend directory
    cd backend

    # Install the required npm packages
    npm install

    # Start the server
    node server.js
    ```
    The backend server should now be running, typically on `http://localhost:8081`.

4.  **Set Up and Run the Frontend Application:**
    -   Open a **new terminal window**.
    ```bash
    # Navigate to the frontend directory from the project root
    cd frontend

    # Install the required npm packages
    npm install

    # Start the development server
    npm run dev
    ```

5.  **Access the Application:**
    -   The `npm run dev` command will output a local URL, usually `http://localhost:5173`.
    -   Open your web browser and navigate to this URL.
    -   You should now see the wedding dresses list and be able to interact with the application.
