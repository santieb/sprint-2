const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3000/index')

schema = {name: String, apellido: String, comment : String}

const users = mongoose.model('Users', schema);

const juan = {name: 'Juan', apellido: 'Marquez', comment: 'hello world'};

let newUser = new users(juan)
newUser.save()



async function lookForJuan() {

     try{
        let user = users.find( name => users.name == 'Juan' );
            
        console.log(user) = await fetch(user);
        return data;
    }
    catch(error) {
        console.log(error)
    }
      
};