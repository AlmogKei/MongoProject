const mongoose = require('mongoose');

main().catch(err => console.error('Error connecting to MongoDB:', err));

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/FinishTaskAppWorkers', {
    });
    console.log('MongoDB connected to FinishTaskAppWorkers');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
