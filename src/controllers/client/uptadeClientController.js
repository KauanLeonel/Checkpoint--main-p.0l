import { update } from "../../models/clientModel.js"

export default async function putClientController(req, res) {
    const {id} = req.params
    const client = req.body

    const result = await update(+id, client);

    return res.json({
        message: "Usuário alterado com sucesso", 
        request:{
            name: "Teste",
        email: "Teste@gmail.com",
        id: 1,
        avatar: 'http://github.com/KauanLeonel.png'
        } 
    })
}