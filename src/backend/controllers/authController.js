
const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ACCESS_TOKEN_SECRET = '4868f80777e4c7a3c766e61bfb0c3cf163bfcd3a393cccfe159436e13fd6d825f20d62bafc54380889107d2d16ba31eb470363d74943ae384fc60895abc6d4bd'

/**
 * Handle login. See if the user have input user or password
 * 
 */
const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });

    /**
 * Compare the user if he is found, display error if he is not found
 * 
 */
    const foundUser = await User.findOne({ username: user }).exec();
    if (!foundUser) return res.sendStatus(401); 

/**
 * Use bcrypt encryption then compare the input password to see if it matches the username password
 * 
 */
    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
/**
 * Is he a admin? Define the admin variable
 * 
 */
        const isAdmin = Boolean(foundUser.isAdmin);
        
/**
 * Get a payload, so it can be used in cookies for authentication purposes, including username and admin checker
 * 
 */
        const payload = {
            username: foundUser.username,
            isAdmin: foundUser.isAdmin,
          };

/**
 * Sign and create a access token
 * 
 */
        const accessToken = jwt.sign(
            payload, ACCESS_TOKEN_SECRET,
           
            { expiresIn: '3d' }
        );
    
      
    
 /**
 * Put that token into cookie
 * 
 */
        res.cookie('jwt', accessToken, isAdmin, { httpOnly: false, secure: false, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });
/**
 * Output response
 * 
 */      
        res.json({accessToken: accessToken});

    
        
    } else {
/**
 * If the login fails for whatever reason
 * 
 */
        res.sendStatus(401);
    }
}

module.exports = { handleLogin};