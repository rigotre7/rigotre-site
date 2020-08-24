require('dotenv').config();
const express = require('express');
const path = require('path');
const rateLimit = require("express-rate-limit");
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 5000;

// only 3 requests to send me a message per day per ip
// no one should be wanting to contact me that bad...
const apiLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 1 day
  max: 3
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// only apply to requests that begin with /api/
app.use("/api/", apiLimiter);
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// For AWS
// app.set('trust proxy', 1)
 
// API calls
app.post('/api/sendMessage', (req, res) => {
  try {
    console.log("sending email: ", req.body);
    axios.post(
        'https://api.emailjs.com/api/v1.0/email/send',
        {
          service_id: process.env.EJS_SERVICE_ID,
          template_id: process.env.EJS_TEMPLATE_ID,
          user_id: process.env.EJS_USER_ID,
          template_params: req.body,
        }
    )
    .then((ok) => {
      console.log("email sent successfully")
      return res.status(200).json({success: true});
    })
    .catch((err) => {
      console.log("failed to send email: ", err);
      return res.status(500).json({success: false});
    });
  } catch(err) {
    console.log("failed to send email: ", err);
    return res.status(500).json({success: false});
  }
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port);

console.log(`Express running on port ${port}`);