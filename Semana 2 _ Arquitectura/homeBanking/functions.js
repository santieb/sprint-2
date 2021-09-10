const users = require('./userModel');

const createUser = async (user) => {
    const newUser = new users(user);
    const response = await newUser.save();
    return response;
}

const updateBalance = async (req) => await users.findByIdAndUpdate("613a316c8620b383fe9a792b", req.amount);




module.exports = {
    createUser,
    updateBalance,
}