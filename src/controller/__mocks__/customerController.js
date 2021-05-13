const { User } = require('../../model')


const user = [
    {
        _id: '609cfc1273b10e3d5263200f',
        name: 'Shakib AL Hasan',
        email: 'shakib75@gmail.com'
    }
]

exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        let newUser = new User({
            name,
            email
        })
        if (newUser) {
            user.push(newUser)
            res.status(201).json(newUser)
        }
    } catch (e) {
        res.status(501).json(e)
    }
}

exports.getUser = async (req, res) => {
    try {
        const _id = req.params.id;
        let findUser = user.find(x => x._id == _id)
        if (findUser) {
            res.status(200).json(findUser)
        }
    } catch (e) {
        res.status(501).json(e)
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const _id = req.params.id;
        let findUser = user.find(x => x._id == _id)
        if (findUser) {
            findUser.name = name;
            findUser.email = email;
            res.status(202).json(findUser)
        }
    } catch (e) {
        res.status(501).json(e)
    }
}

exports.deleteUser = async(req, res) => {
    try{
        const _id = req.params.id;
        // const findUser = user.find(x=>x._id == _id)
        // const index = user.findIndex(findUser)
        // user.splice(index, 1)
        user[0] == null
        res.status(204).json(user)
    }
    catch (e) {
        res.status(501).json(e)
    }
}