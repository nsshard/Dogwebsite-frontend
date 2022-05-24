const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ACCESS_TOKEN_SECRET = '4868f80777e4c7a3c766e61bfb0c3cf163bfcd3a393cccfe159436e13fd6d825f20d62bafc54380889107d2d16ba31eb470363d74943ae384fc60895abc6d4bd'

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });

    const foundUser = await User.findOne({ username: user }).exec();
    if (!foundUser) return res.sendStatus(401); 

    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
        const staffcode = String(foundUser.staffcode);
        
        const accessToken = jwt.sign(
            {
               
                    "username": foundUser.username,
                    "staffcode": foundUser.staffcode
                
            },
           ACCESS_TOKEN_SECRET,
            { expiresIn: '3d' }
        );
        

        foundUser.accessToken = accessToken;
      
    
       
        res.cookie('jwt', accessToken, { httpOnly: false, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });
       
        res.json({ staffcode, accessToken });

    
        
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin};