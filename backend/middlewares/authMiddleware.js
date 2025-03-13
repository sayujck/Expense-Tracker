const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (token) {
        try {
            const jwtResponse = jwt.verify(token, process.env.JWT_SECRET);
            req.userId = jwtResponse.userId;
            next();
        } catch (error) {
            console.log(error);
            res.status(401).json({ message: "Unauthorized" });

        }
    }
    else {
        res.status(401).json({ message: "Token Missing" });
    }
}
module.exports = authMiddleware;