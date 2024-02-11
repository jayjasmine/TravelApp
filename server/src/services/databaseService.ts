import mongoose from 'mongoose';

const url = 'mongodb://localhost:27017/TravelApp';

export async function main() {
  try {
    await mongoose.connect(url);
    console.log('Connected successfully to database');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}