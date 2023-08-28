import { log } from 'console';
import mongoose from 'mongoose';

export const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on('connected', () => {
      log('MongoDB connected sucesss!!');
    });

    connection.on('error', (err) => {
      log(`Some error occurred... ${err}`);
    });
  } catch (error) {
    log(`Something went wrong... ${error}`);
  }
};
