const User = require('../model/User');

function DeleteCookie (req, res){
    res.clearCookie('jwt',  { path: '/' });
    res.clearCookie('jwt',  { path: '/auth' });
    res.clearCookie('jwt');
    res.clearCookie();
    console.log("Cookie cleared");
    {
    return res.status(200).json({ 'message': "Cookie cleared!" });
    
    }
};

module.exports = { DeleteCookie }