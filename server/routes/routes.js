const express = require('express')
const routes = express.Router()
const newUserTemplateCopy = require('../models/users')
const newRamenTemplateCopy = require('../models/ramens')
const newIngredientTemplateCopy = require('../models/ingredients')
const Ramens = require('../models/ramens')
const Ingredients = require('../models/ingredients')
const Users = require('../models/users')
const AWS = require('aws-sdk')
const upload = require('../middleware/multer-aws')
const cloudinary = require('cloudinary')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("./auth");

routes.get('/', (req, res) => {
    res.send('Hello world');
})

routes.get('/api/posts', async (req, res) => {
    try {
        const response = await axios.get('https://your-wordpress-site.com/wp-json/wp/v2/posts');
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching posts');
    }
});

module.exports = routes