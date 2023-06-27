import User from '../models/User'

class UserController {
    async store(request, response) {
        const {id, name, email, provider} = await User.create(request.body)

        // const userExist = await User.findOne({where: {email: request.body.email}})

        if (userExist) {
            return response.status(400).json({erro: "email ja cadastrado"})
        }        

        return response.json({
            id,
            name,
            email,
            provider
        })
    }
}

export default new UserController()