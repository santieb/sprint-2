const { response } = require('express');
const mongoose = require('mongoose');
const { schema } = require('./restaurant/plateModel');
const plate = require('./restaurant/plateModel');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const conectionString = `mongodb://localhost:27017`;
mongoose.connect(conectionString, options);


user = {
    name: String,
    money: Number
}

const users = mongoose.model('Users', user);

const juan = {name: 'Juan', money: 100};


const createUser = async () => {

    const session = await mongoose.startSession();
    session.startTransaction()



    try {
        const newUser = await new users(juan);
        response = await newUser.save().session(session)
        assert.ok(!response)
    }catch(err) {
        response =  err;
    }
    return response;
} 




list()