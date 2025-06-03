import { update } from "../../models/userModel.js"

export default async function putUserController(req, res) {
    const {id} = req.params
    const user = req.body

    const result = await update(+id, user);

    return res.json({
        message: "Usuário alterado com sucesso", user:{
            name: "Teste",
        email: "Teste@gmail.com",
        id: 1,
        avatar: 'http://github.com/KauanLeonel.png'
        } 
    })
}