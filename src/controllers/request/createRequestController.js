import { create, requestValidator } from "../../models/requestModel.js";
export default async function createRequestController(req, res) {

    const user = req.body;

    const { success, error, data: requestValited } = requestValidator(request, { id: true })

    // Verifica se a validação falhou (success é false)
    if (!success) {
        // Retorna uma resposta HTTP 400 (Bad Request) com uma mensagem de erro e os erros detalhados por campo
        return res.status(400).json({
            message: 'Erro ao cadastrar a propriedade', // Mensagem geral do erro
            errors: error.flatten().fieldErrors          // Lista de erros por campo (formato do Zod)
        })
    }

    const result = await create(requestValited)


    return res.json({
        message: "imóvel criado com sucesso",
        user: result
    }
    )
}