const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Serve static HTML files
app.use(express.static('public'));

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
