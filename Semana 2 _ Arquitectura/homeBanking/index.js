const express = require('express');
const app = express();
const port = 3024;
const host = 'http://localhost';
const functions = require('./functions')

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
  
app.put('/balance/:mail', (req, res) => {

    functions.updateBalance(req.body)
    .then(response => res.json(response))
    .catch(err => res.json(err));

})

app.listen(port, () => console.log(`${host}:${port}`));