import User from "../models/User.js";

/**
 * Finds a user by their username.
 *
 * @param {string} username The username to search for.
 * @returns {Promise<User|undefined>} The user if found, otherwise undefined.
 */
const findByUsername = (username) => User.findOne({ username });

/**
 * Finds a user by their ID and returns it without the password.
 *
 * @param {ObjectId} id The ID of the user to find.
 * @returns {Promise<User|undefined>} The user if found, otherwise undefined.
 */
const findById = (id) => User.findById(id).select('-password');

/**
 * Creates a new user.
 *
 * @param {Object} userData The data to create a new user with.
 * @returns {Promise<User>} The newly created user.
 */
const createUser = (userData) => User.create(userData);

export default {
  findByUsername,
  findById,
  createUser
};

