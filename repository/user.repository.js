import User from '../models/user.model.js';

export class UserRepository {
  /**
   * Finds a user by username.
   * @param {string} username The username to search for.
   * @returns {Promise<User>} The user object if found or null if not found.
   */
  async findByUsername(username) {
    return await User.findOne({ username });
  }

  /**
   * Finds a user by ID.
   * @param {string} id The ID of the user to search for.
   * @returns {Promise<User>} The user object if found or null if not found.
   */
  async findById(id) {
    return await User.findById(id);
  }

  /**
   * Creates a new user.
   * @param {Object} userData The user data to create a new user.
   * @returns {Promise<User>} The created user object.
   */
  async create(userData) {
    const user = new User(userData);
    return await user.save();
  }
}
