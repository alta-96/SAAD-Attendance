const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken'); 

router.get("/authenticate", function (req, res) {
    // Generate JWT user token 
    // If their login detail are correct (from the req object)
    // we need to return a response to the client that tried to login with a User-Token
    // This will be stored in their browser
});

router.get("/logout", function (req, res) {
    // Delete JWT user token
});