const app = require('./app');
const mongoose = require('mongoose');
const host = 'localhost';
const port = 3001;
const sign = require('./router/sign')


const uri = 'mongodb+srv://pinimalrj123:mongo123@cluster1.k2e7d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1';

// MongoDB connection
const connect = async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');

    const server = app.listen(port, host, () => {
      console.log(` Server running at http://${host}:${port}`);
    });

  } catch (error) {
    console.error('MongoDB connection error:', error.message);
  }
};

connect();

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use('/api', sign);