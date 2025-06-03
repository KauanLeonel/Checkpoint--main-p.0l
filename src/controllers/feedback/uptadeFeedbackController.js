import { update } from "../../models/feedbackModel.js"

export default async function putFeedbackController(req, res) {
    const {id} = req.params
    const feedback = req.body

    const result = await update(+id, feedback);

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