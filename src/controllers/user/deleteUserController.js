import { remove } from "../../models/userModel.js"

export default async function deleteUserController(req, res, next) {
    try {
        const { id } = req.params

        // Verifica se o ID é um número válido
        const parsedId = Number(id)
        if (isNaN(parsedId)) {
            return res.status(400).json({
                message: "ID inválido fornecido!"
            })
        }

        const result = await remove(parsedId)

        return res.json({
            message: `User ID ${id} excluído com sucesso!`,
            user: result
        })
    } catch (error) {
        if (error?.code === 'P2025' && error?.meta?.cause?.includes('Record to delete does not exist')) {
            return res.status(404).json({
                message: 'Usuário não encontrado!',
            })
        }
        next(error)
    }
}
