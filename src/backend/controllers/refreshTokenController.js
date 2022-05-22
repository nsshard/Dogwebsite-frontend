const User = require('../model/User');
const jwt = require('jsonwebtoken');
const ACCESS_TOKEN_SECRET = '4868f80777e4c7a3c766e61bfb0c3cf163bfcd3a393cccfe159436e13fd6d825f20d62bafc54380889107d2d16ba31eb470363d74943ae384fc60895abc6d4bd'
const REFRESH_TOKEN_SECRET = '20e2bb4414c14e3da72a0323b13e9e2f60f5f17e33e299d09539be1639d16f11e9c142f3472d7ea34ec7946e860402d6ac601239a4461c1f19d522940dea3b9f'

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;

    const foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser) return res.sendStatus(403); 
    jwt.verify(
        refreshToken,
        REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || foundUser.username !== decoded.username) return res.sendStatus(403);
            const staffcode = String(foundUser.staffcode);
            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "username": decoded.username,
                        "staffcode": decoded.staffcode
                    }
                },
                ACCESS_TOKEN_SECRET,
                { expiresIn: '1d' }
            );
            res.json({ accessToken, staffcode })
        }
    );
}

module.exports = { handleRefreshToken }