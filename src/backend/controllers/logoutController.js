const User = require('../model/User');

/**
 * Wipes out cookies once the user visits the page.
 * 
 */
function DeleteCookie (req, res){
    res.clearCookie('jwt',  { path: '/' });
    res.clearCookie('jwt',  { path: '/auth' });
    res.clearCookie('jwt');
    res.clearCookie();

/**
 * Display log to console
 * 
 */
    console.log("Cookie cleared");
    {
    return res.status(200).json({ 'message': "Cookie cleared!" });
    
    }
};

module.exports = { DeleteCookie }