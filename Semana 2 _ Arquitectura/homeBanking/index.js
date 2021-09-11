const express = require('express');
const app = express();
const port = 3024;
const host = 'http://localhost';
const functions = require('./functions')
const users = require('./userModel');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post('/', (req, res) => {

    let user = {
        name: req.body.name,
        lastname: req.body.lastname,
        mail: req.body.mail,
        balance: req.body.balance
    }

    functions.createUser(user)
    .then(response => res.json(response))
    .catch(err => res.json(err));
});
  
app.put('/balance', functions.mailExist, (req, res) => {

    functions.modifyBalance(req)
    .then(response => res.json(response))
    .catch(err => res.json(err));

})

app.put('/transfer', functions.mailsExist, (req, res) => {

    functions.transfer(req)
    .then(response => res.json(response))
    .catch(err => res.json(err));

})



app.listen(port, () => console.log(`${host}:${port}`));