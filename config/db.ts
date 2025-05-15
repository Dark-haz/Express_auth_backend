import { connect, disconnect } from 'mongoose';

/**
 * Establishes a connection to the MongoDB database.
 *
 * @function connectDB
 * @async
 * @returns {Promise<void>}
 * @throws {Error} If the connection to MongoDB fails.
 */

export const connectDB = async (): Promise<void> => {
  try {
    await connect(process.env.MONGO_URI as string);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error during disconnection:' , err);
    process.exit(1);
  }
}

/**
 * Disconnects the MongoDB connection.
 *
 * @function disconnectDB
 * @async
 * @returns {Promise<void>}
 * @throws {Error} If the disconnection from MongoDB fails.
 */

export const disconnectDB = async (): Promise<void> => {
  try {
    await disconnect();
    console.log('MongoDB Disconnected');
  } catch (err) {
    console.error('Error during disconnection:', err);
    process.exit(0);
  }
}

export default {connectDB , disconnectDB};




