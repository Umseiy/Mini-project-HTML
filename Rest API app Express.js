mkdir simple-express-api
cd simple-express-api
npm init -y


---

✅ Step 2: Install Express

npm install express


---

✅ Step 3: Create index.js

In the root of your project, create a file named index.js and add the following code:

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample in-memory data
let items = [
  { id: 1, name: 'Item One' },
  { id: 2, name: 'Item Two' }
];

// Routes

// GET all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// GET a single item
app.get('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  res.json(item);
});

// POST a new item
app.post('/api/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT update an item
app.put('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  item.name = req.body.name;
  res.json(item);
});

// DELETE an item
app.delete('/api/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Item not found');
  const deletedItem = items.splice(index, 1);
  res.json(deletedItem);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


---

✅ Step 4: Run Your API

node index.js

You should see:

Server is running on http://localhost:3000


---

📬 Example API Endpoints

GET /api/items → List all items

GET /api/items/1 → Get item with id 1

POST /api/items with JSON { "name": "New Item" }

PUT /api/items/1 with JSON { "name": "Updated Name" }

DELETE /api/items/1

