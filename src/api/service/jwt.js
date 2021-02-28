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

const getExpireValue = type => {
    return (
        type === 'ACCESS_TOKEN'
            ? 1 * 60 * 60
            : type === 'REFRESH_TOKEN'
                ? 7 * 24 * 60 * 60
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
            expiresIn : getExpireValue(type)
        })
    );
};

export const jwtVerify = token => {
    return jwt.verify(token, getTokenType('ACCESS_TOKEN'));
};
