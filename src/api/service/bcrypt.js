import bcrypt from 'bcryptjs';

export const hash = plainText => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(plainText, salt);
};

export const compare = (plainText, hashedText) => {
    return bcrypt.compareSync(plainText, hashedText);
}
