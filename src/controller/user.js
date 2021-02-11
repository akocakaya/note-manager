import userModel from '../dao/user';

exports.createUser = (req, res, next) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    };

    userModel.create(user, (err, user) => {
        if(err) {
            res.json({
                error: err
            });
        }
        res.json({
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
            res.json({
                error: err
            });
        }
        res.json({
            message: 'User found successfully'
        });
    });
};

exports.updateUser = (req, res, next) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    };

    userModel.update(user, (err, user) => {
        if(err) {
            res.json({
                error: err
            });
        }
        res.json({
            message: 'User updated successfully'
        });
    });
};
