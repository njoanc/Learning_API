'use strict'
const User = use('App/Models/User');
class AuthController {
    async login({ request, auth, response }) {

        let { email, password } = request.all();

        if (await auth.attempt(email, password)) {
            let user = await User.findBy('email', email)
            let token = await auth.generate(user)

            Object.assign(user, token)
            return response.json(token)
        }
    }
}

module.exports = AuthController
