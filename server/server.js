const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Dummy Data
const projects = [
    {
        id: 1,
        title: "Acclaim: AI-Based Sanctioning System",
        description: "AI-driven sanctioning system to automate patient billing. Features ML model for sanctioning logic and IoT scalability via Raspberry Pi.",
        tech: ["Python", "Machine Learning", "IoT", "Raspberry Pi"],
        link: "#"
    },
    {
        id: 2,
        title: "E-Commerce Web Application",
        description: "Full-stack online shopping platform. Focused on API syncing for real-time data consistency and performance optimization.",
        tech: ["Web Development", "APIs", "Full Stack"],
        link: "#"
    }
];

// Routes
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`[CONTACT FORM] Name: ${name}, Email: ${email}, Message: ${message}`);
    res.json({ success: true, message: "Message received in the matrix." });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
