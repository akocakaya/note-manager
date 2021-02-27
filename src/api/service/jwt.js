import jwt from 'jsonwebtoken';

const getTokenType = type => {
    return (
        type === 'ACCESS_TOKEN'
            ? process.env.JWT_SECRET_ACCESS_KEY
            : type === 'REFRESH_TOKEN'
                ? process.env.JWT_SECRET_REFRESH_KEY
                : ''
    )
}

export const jwtSign = (data, type) => {
    return (
        jwt.sign({
            username : data.username,
            id       : data.id,
        },
            getTokenType(type),
        {
            expiresIn : 1 * 60 * 60
        })
    );
};

export const jwtVerify = token => {
    return jwt.verify(token, getTokenType('ACCESS_TOKEN'));
};
