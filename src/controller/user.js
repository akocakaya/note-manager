import userModel from '../dao/user';

exports.createUser = (req, res, next) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    };

    userModel.create(user, (err, user) => {
        if(err) {
            res.send({
                error: {
                    err,
                    message: `User already exist with given name: ${req.body.username}`
                }
            });
        }
        res.send({
            message: 'User created successfully'
        });
    });
};

exports.getUser = (req, res, next) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    };

    userModel.get(user, (err, user) => {
        if(err) {
            res.send({
                error: err
            });
        }
        res.send({
            message: 'User found successfully'
        });
    });
};

exports.updateUser = (req, res, next) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    };

    userModel.updateUser(user, (err, user) => {
        if(err) {
            res.send({
                error: err
            });
        }
        res.send({
            message: 'User updated successfully'
        });
    });
};
