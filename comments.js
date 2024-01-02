// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// Create event bus client
const events = [];

// Create endpoint to receive events from event bus
app.post('/events', (req, res) => {
  const event = req.body;
  events.push(event);

  // Send event to moderation service
  axios.post('http://localhost:4003/events', event);

  // Send event to query service
  axios.post('http://localhost:4004/events', event);

  // Send event to moderation service
  axios.post('http://localhost:4005/events', event);

  res.send({ status: 'OK' });
});

// Create endpoint to query all events
app.get('/events', (req, res) => {
  res.send(events);
});

// Start server
app.listen(4002, () => {
  console.log('Listening on 4002');
});