const users = require('./userModel');

const createUser = async (user) => {
    const newUser = new users(user);
    const response = await newUser.save();
    return response;
}

module.exports = {
    createUser,
}