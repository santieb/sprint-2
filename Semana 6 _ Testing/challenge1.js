const express = require('express')
const jwt = require('jsonwebtoken')
const helmet = require('helmet')
const app = express()
const port = 3028

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/login', (req, res) => {
    const { user, password } = req.body
    const token = jwt.sign({
        user
    }, password)
    
    res.json( {token} )
})


const authenticateUser = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1]
        const verifyToken = jwt.verify(token, "1234")
        if(verifyToken) {
            req.user = verifyToken;
            return next()
        }
    }catch(err) {
        res.json({ error: 'error'})
    }
}

app.post('/secure', authenticateUser, (req, res) => {
    res.send(`authenticated page. hello ${req.body.user}`)
})


app.use(helmet())

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})
