const express = require("express");
const path = require("path");

const app = express();

// Serve static files (like index.html)
app.use(express.static(__dirname));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});