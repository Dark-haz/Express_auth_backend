import { connect } from 'mongoose';

/**
 * Establishes a connection to the MongoDB database.
 *
 * @function connectDB
 * @async
 * @returns {Promise<void>}
 * @throws {Error} If the connection to MongoDB fails.
 */
const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

/**
 * Disconnects the MongoDB connection.
 *
 * @function disconnectDB
 * @async
 * @returns {Promise<void>}
 * @throws {Error} If the disconnection from MongoDB fails.
 */
export const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log('MongoDB Disconnected');
  } catch (err) {
    console.error('Error during disconnection:', err.message);
  }
};


export default {connectDB , disconnectDB};




