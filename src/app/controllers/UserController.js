const { remember } = require("../lib/cache")
const User = require("../models/user")

class UserController {
    async index(req,res){
        const users = await remember('users', async () => {
            return await User.query()
        }) 
        return res.status(200).json(users)
    }
}

module.exports = UserController