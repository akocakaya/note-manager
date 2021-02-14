import { UserModel } from '../model';

export const register = (req, res) => {
    const user = new UserModel({
        username : req.body.username,
        password : req.body.password
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

    UserModel.findOne({ username })
        .then(data => {
            if(!data)
                res
                    .status(401)
                    .send({ message: `User could not find` });
            else if(data.password !== req.body.password)
                res
                    .status(401)
                    .send({ message: `Username or password is wrong` });
            else
                res
                    .status(200)
                    .send({ message: `User successfully login` });
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: err.message || `Some error occured while login` });
        });
};

export const changePassword = (req, res) => {
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
