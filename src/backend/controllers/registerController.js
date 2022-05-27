const User = require('../model/User');
const bcrypt = require('bcrypt');


//This script handles register actions


//Send in user, password and staffcode in the request body
const handleNewUser = async (req, res) => {
    const { user, pwd, staffcode } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });

   
    const duplicate = await User.findOne({ username: user }).exec();
    if (duplicate) return res.sendStatus(409); 
    try {
     
        //Hashing password with bcrypt
        const hashedPwd = await bcrypt.hash(pwd, 10);

      //create the user into DB
        const result = await User.create({
            "username": user,
            "password": hashedPwd,
            "staffcode": staffcode,
            "isAdmin": 'false'
        });

        console.log(result);

        res.status(201).json({ 'success': `New user ${user} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };