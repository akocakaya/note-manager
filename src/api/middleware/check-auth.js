import { jwtVerify } from '../service/jwt';

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwtVerify(token);
        req.userData = decodedToken;
        next();
    } catch(err) {
        return res
            .status(401)
            .send({
                message: 'Auth failed'
            });
    }
}
