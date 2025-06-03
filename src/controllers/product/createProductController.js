import { create, productValidator } from "../../models/productModel.js";

export default async function createProductController(req, res) {

    const product = req.body;

    const { success, error, data: productValidated } = productValidator(product);

    if (!success) {
        return res.status(400).json({
            message: 'Erro ao cadastrar o produto',
            errors: error.flatten().fieldErrors
        });
    }

    const result = await create(productValidated);

    return res.json({
        message: "Produto criado com sucesso",
        product: result
    });
}
