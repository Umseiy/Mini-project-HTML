📦 1. Initialize the project

Open a terminal and run:

mkdir simple-express-api
cd simple-express-api
npm init -y
npm install express


---

📄 2. Create the app (index.js)

Create a file called index.js and add the following code:

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory "database"
let items = [
  { id: 1, name: 'Item One' },
  { id: 2, name: 'Item Two' },
];

// GET all items
app.get('/items', (req, res) => {
  res.json(items);
});

// GET a single item by ID
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: 'Item not found' });
  res.json(item);
});

// POST (create) a new item
app.post('/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT (update) an existing item
app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: 'Item not found' });

  item.name = req.body.name;
  res.json(item);
});

// DELETE an item
app.delete('/items/:id', (req, res) => {
  items = items.filter(i => i.id !== parseInt(req.params.id));
  res.json({ message: 'Item deleted' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


---

🚀 3. Run the API

node index.js

Open your browser or API testing tool (like Postman or curl) and use these endpoints:

Method	Endpoint	Description

GET	/items	Get all items
GET	/items/:id	Get item by ID
POST	/items	Create new item (send { "name": "Item Three" } in body)
PUT	/items/:id	Update item (send updated { "name": "New Name" })
DELETE	/items/:id	Delete item by ID


