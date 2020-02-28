const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/stays', {
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useUnifiedTopology: true
});
