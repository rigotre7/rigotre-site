## [rodrigotrejo.com](https://rodrigotrejo.com)


This is a simple Express.js/React application. The express backend runs on port 5000 and has one endpoint to send me an email from the 'Contact Me' form on the site. The express backend will serve the index.html file from the react build folder for any other request. This way react-router handles the routing.

The site is deployed on an AWS EC2 instance running Amazon Linux 2. I've configured an nginx reverse proxy server to forward all requests to the express app which then serves the react files. The SSL certificates for my server were acquired using [letsencrypt](https://letsencrypt.org/).
