const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Mock data to simulate file and directory structures
const files = [
  {
    id: 1,
    name: "Folder1",
    type: "directory",
    children: [{ id: 2, name: "File1.txt", type: "file" }],
  },
  { id: 3, name: "File2.txt", type: "file" },
];

// API endpoint to get files
app.get("/api/items", (req, res) => {
  res.json(files);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
