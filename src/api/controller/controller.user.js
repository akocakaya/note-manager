import { UserModel }        from '../model';
import { hash, compare }    from '../service/bcrypt';
import { jwtSign }          from '../service/jwt';

export const register = (req, res) => {
    const user = new UserModel({
        username : req.body.username,
        password : hash(req.body.password)
    });

    user.save(user)
        .then(data => {
            res
                .status(200)
                .send({
                    data,
                    message : `User registered by successfully`
                });
        })
        .catch(err => {
            res
                .status(500)
                .send({
                    message: err.message || `Some error occured while registering.` 
                });
        });
};

export const login = (req, res) => {
    const username = req.body.username;
    let password = req.body.password;
    if(!username || ! password)
        res
            .status(404)
            .send({ message: `Username or password can not be empty` });

    UserModel.findOne({ username })
        .then(data => {
            if(!data)
                res
                    .status(401)
                    .send({ message: `User could not find` });

            if(compare(req.body.password, data.password)) {
                const accessToken = jwtSign(data, 'ACCESS_TOKEN');
                const refreshToken = jwtSign(data, 'REFRESH_TOKEN');
                res
                    .status(200)
                    .send({ message: `User successfully login`, accessToken, refreshToken });
            } else {
                res
                    .status(401)
                    .send({ message: `Username or password is wrong` });
            }
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: err.message || `Some error occured while login` });
        });
};

export const forgetPassword = (req, res) => {
    const username = req.body.username;

    UserModel.findOneAndUpdate({ username }, req.body)
        .then(data => {
            if(!data)
                res
                    .status(200)
                    .send({ message: `User could not find` });
            else
                res
                    .status(200)
                    .send({ message: `User changed password successfully` });
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: err.message || 'Some error occured while changing password' });
        });
};

export const refreshToken = (req, res) => {
    try {
        const accessToken = jwtSign(data, 'ACCESS_TOKEN');
        const refreshToken = jwtSign(data, 'REFRESH_TOKEN');
        res
            .status(200)
            .send({ accessToken, refreshToken });    
    } catch(err) {
        res
            .status(401)
            .send({ message: `Token expired` });
    }
}
