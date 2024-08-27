const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Add route for sum
app.post('/sum', (req, res) => {
    const { a, b } = req.body;
    const result = Number(a) + Number(b);
    res.json({ result });
});

// Add route for subtraction
app.post('/subtract', (req, res) => {
    const { a, b } = req.body;
    const result = Number(a) - Number(b);
    res.json({result});
});

// Add route for multiplication
app.post('/multiply', (req, res) => {
    const { a, b } = req.body;
    const result = Number(a) * Number(b);
    res.json({ result });
});

// Add route for division
app.post('/divide', (req, res) => {
    const { a, b } = req.body;
    if (b === 0) {
        return res.status(400).json({ error: 'Division by zero is not allowed' });
    }
    const result = Number(a) / Number(b);
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Calculator API running on http://localhost:${port}`);
});
