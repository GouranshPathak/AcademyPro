const express = require('express');
const nodemailer = require('nodemailer');
const Enrollment = require('../models/Enrollment');
const dotenv = require('dotenv');

dotenv.config();
const router = express.Router();

// POST /api/enroll
// Handles new enrollment submissions
router.post('/', async (req, res) => {
  try {
    // 1. Extract data from the request body
    const { name, email, contactNumber, classStudying, percentage, schoolName, course, city } = req.body;

    // Basic validation
    if (!name || !email || !contactNumber || !course) {
      return res.status(400).json({ msg: 'Please enter all required fields.' });
    }

    // 2. Create a new enrollment document
    const newEnrollment = new Enrollment({
      name,
      email,
      contactNumber,
      classStudying,
      percentage,
      schoolName,
      course,
      city,
    });

    // 3. Save the document to MongoDB
    await newEnrollment.save();

    // 4. Send a confirmation email using Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email, // Send to the user's email address
      subject: `Confirmation: Enrollment for ${course} at AcademyPro`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Thank You for Your Interest, ${name}!</h2>
          <p>We have successfully received your enrollment request for the <strong>${course}</strong> course.</p>
          <p>Our counseling team will review your details and contact you within the next 24 hours to guide you through the next steps.</p>
          <p>Best regards,<br/><strong>The AcademyPro Team</strong></p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // 5. Send a success response back to the frontend
    res.status(201).json({ msg: 'Enrollment successful! A confirmation email has been sent.' });

  } catch (err) {
    console.error('Server Error:', err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;