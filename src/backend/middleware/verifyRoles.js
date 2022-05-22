
const checkMe = (req,res, next)=> {
    const token = req.cookies.jwt;
    if (token) { 
        jwt.verify(token, 'jwt', async (err, decodedToken) => { 
            if (err) {
                console.log(err.message);
                next();
            } else {
                console.log(decodedToken);
                let user = await user.findbyId(decodedToken.id);
                next();
                console.log(user);
            }
            })
        }
}

const verifyRoles = () => {
    return (req, res, next) => {
        const result = (req.username = "Petshopstaff");
        next();
    if (!result) return res.sendStatus(401);
        
    }
}

module.exports = verifyRoles