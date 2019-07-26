'use strict'

const User = use('App/Models/User')
const Hash= use('Hash')


class UpdateUserInfoController {
    async update({request, response, params}){
        const id = params.id
        const {username, password, newPassword} = request.only(['username', 'password', 'newPassword'])
    }
    
}

module.exports = UpdateUserInfoController
