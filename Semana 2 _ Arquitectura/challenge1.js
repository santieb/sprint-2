const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const conectionString = `mongodb://localhost:27017`;
mongoose.connect(conectionString, options);


schema = {
    name: String,
    apellido: String,
    comment : String
}

const users = mongoose.model('Users', schema);

const juan = {name: 'Juan', apellido: 'Marquez', comment: 'hello world'};

let newUser = new users(juan)
newUser.save()


const list = async () => {
    let response;
    try {
        response = await users.find();
    }catch(err) {
        response =  err;
    }
    console.log(response)
    return response;
} 
list()