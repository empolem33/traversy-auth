const express = require('express')
const passport = require('passport')
const router = express.Router()

//@description  Auth with google
//@route        GET /auth/google
router.get('/google', passport.authenticate('google', {scope: ['profile']}))

//@description  google auth callback
//@route        GET /auth/google/calback
router.get('/google/callback', passport.authenticate('google',{ failureRedirect:'/'}), (rec,res) =>{
    res.redirect('/dashboard')
})

//@desc logout user
//@route /auth/logout
router.get('/logout', (req, res, next) => {
    req.logOut((err)=>{
        if(err){return next(err)}
        res.redirect('/')
    })
    
})

module.exports = router
