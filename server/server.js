const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { z } = require('zod');
require('dotenv').config();

const sequelize = require('./config/database');
const Project = require('./models/Project');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Database Connection and Sync
sequelize.authenticate()
    .then(() => {
        console.log('Database connected...');
        return sequelize.sync(); // Sync models with database
    })
    .then(() => console.log('Models synced...'))
    .catch(err => console.log('Error: ' + err));

// Routes

// GET /api/projects - Fetch from Database
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.json(projects);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
});

// Zod Schema for Contact Form
const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(1, "Message is required")
});

// POST /api/contact - Send Real Email
app.post('/api/contact', async (req, res) => {
    try {
        // Validate input
        const { name, email, message } = contactSchema.parse(req.body);

        // Create Transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Mail Options
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER, // Send to yourself
            subject: `Portfolio Contact: ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        // Send Email
        await transporter.sendMail(mailOptions);

        res.json({ success: true, message: "Message sent successfully!" });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ errors: error.errors });
        }
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to send message." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
