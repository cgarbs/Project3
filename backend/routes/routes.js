/**Our connection to the front-end */
const express = require('express');
const router = express.Router()
const jwt = require('jsonwebtoken')

const Message = require('../models/Message')
const User = require('../models/User')
const Server = require('../models/Server')


router.get(`/`, (req, res) => {
    res.json({
        backend: '🔥'
    })
})


// Servers
router.post(`/createServer`, authorize, (req, res) => {

    Server.create({ title: req.body.title, messages: req.body.messages })
        .then(server => {
            res.json({ server })
        }).catch(console.error)

})

router.get('/getServers', (req, res) => {
    Server.find({}).then(allServersFromDb => {
        res.json(allServersFromDb)
    })
})

router.get('/server/:id', (req, res) => {
    Server.findById(req.params.id).then(serverThread => {
        res.json(serverThread)
    })
})

// SEND MESSAGE
router.post(`/sendMessage`, authorize, (req, res) => {

    Message.create({ text: req.body.message, from: res.locals.user._id, date: Date.now })
        .then(post => {
            res.json({ post })
        }).catch(console.error)

})

router.get('/getMyServers', (req, res) => {
    Server.find({ userId: res.locals.user._id }).then(allServersFromDb => {
        res.json(allServersFromDb)
    })
})


// User List
router.get('/users', (req, res) => {
    User.find({}).then(allUsersFromDb => {
        res.json(allUsersFromDb)
    })
})


// User/Auth
router.get('/user', authorize, (req, res) => {

    User.findById(res.locals.user._id)
        .then(user => {
            res.json(user)
        }).catch(console.error)

})

router.post('/logMeIn', async (req, res) => {

    //Check if user already exists 
    let user = await User.findOne({ email: req.body.email })

    //If s/he doesn't exist than create new user 
    if (!user) {
        user = await User.create(req.body)
    }

    //Signing the token with the user object
    jwt.sign({ user }, 'secret key', { expiresIn: '30min' }, (err, token) => {
        //Send token back to the frontend 
        res.json({ user, token })
    })
})









function authorize(req, res, next) {
    let token = req.headers['authorization'].split(' ')[1]

    if (token != 'null') {
        jwt.verify(token, 'secret key', async (err, data) => {
            if (!err) {
                console.log(data)
                res.locals.user = data.user
                next()
            } else {
                console.error(err)
            }
        })
    } else {
        res.status(403).json({ message: 'Must be logged in' })
    }
}





module.exports = router