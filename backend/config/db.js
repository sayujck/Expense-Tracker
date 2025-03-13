const mongoose = require('mongoose');

const connection_string = process.env.MONGODB_URI;

mongoose.connect(connection_string).then((res) => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Error connecting to MongoDB:', error.message);
}); 