const express = require('express');
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');
const dotenv = require('dotenv');

dotenv.config();
const router = express.Router();

// @route   POST /api/contact
// @desc    Handle contact form submission
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;

    // Basic validation
    if (!name || !email || !phone) {
      return res.status(400).json({ msg: 'Please provide name, email, and phone.' });
    }

    // Create a new contact document
    const newContact = new Contact({
      name,
      email,
      phone,
      course,
      message,
    });

    // Save the document to the database
    await newContact.save();

    // Send a confirmation email to the user
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false, // false for port 587, true for 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email, // Send to the user who filled out the form
      subject: 'Thank You for Contacting AcademyPro!',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Hello ${name},</h2>
          <p>Thank you for reaching out to us. We have received your message and appreciate your interest.</p>
          <p>Our counseling team will get back to you within the next 24 hours.</p>
          <p>Best regards,<br/><strong>The AcademyPro Team</strong></p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Send success response to the frontend
    res.status(201).json({ msg: 'Contact form submitted successfully.' });

  } catch (err) {
    console.error('Server Error:', err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;