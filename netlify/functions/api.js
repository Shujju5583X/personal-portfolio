const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();
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

const router = express.Router();

router.get('/projects', (req, res) => {
    res.json(projects);
});

router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`[CONTACT FORM] Name: ${name}, Email: ${email}, Message: ${message}`);
    res.json({ success: true, message: "Message received in the matrix." });
});

app.use('/api/', router);

module.exports.handler = serverless(app);
