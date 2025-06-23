Setup Instructions

1. Install Node.js

Make sure Node.js is installed. You can check by running:

node -v
npm -v

If not installed, download it from https://nodejs.org.


---

2. Create Project Folder

mkdir my-express-app
cd my-express-app


---

3. Initialize Node.js Project

npm init -y


---

4. Install Express.js

npm install express


---

5. Create Application File

touch app.js


---

6. Add Basic Express.js Code

// app.js
const express = require('express');
const app = express();

const PORT = 3000;

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// About route
app.get('/about', (req, res) => {
    res.send('This is the About Page.');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


---

7. Run the Server

node app.js

Open your browser and visit:

http://localhost:3000/ ➜ Home Page

http://localhost:3000/about ➜ About Page



---

📖 API Documentation

Base URL

http://localhost:3000


---

1. GET /

Description: Returns a welcome message.
Endpoint: /
Method: GET
Response:

Welcome to the Home Page!


---

2. GET /about

Description: Returns information about the page.
Endpoint: /about
Method: GET
Response:

This is the About Page.


---

⚙️ Optional Improvements

Return JSON responses instead of plain text.

Add error handling for undefined routes.

Use middleware (like express.json() for JSON parsing).

Organize routes into separate files.
