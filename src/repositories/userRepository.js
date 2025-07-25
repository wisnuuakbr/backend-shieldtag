const Users = require("../models/user");

class UserRepository {
    async createUser(user) {
        return await Users.create(user);
    }

    async getUserByEmail(email) {
        return await Users.findOne({ where: { user_mail: email } });
    }
}

module.exports = UserRepository;