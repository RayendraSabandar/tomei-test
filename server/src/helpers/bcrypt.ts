import * as bcrypt from 'bcrypt';

function hashPassword(password){
    const saltOrRounds = 10;
    const salt = bcrypt.genSaltSync(saltOrRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash
}

function comparePassword(entryPassword, dbPassword){
    const isMatch = bcrypt.compareSync(entryPassword, dbPassword)
    return isMatch

}

export { hashPassword, comparePassword}