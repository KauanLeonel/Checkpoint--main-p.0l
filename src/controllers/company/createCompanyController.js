import { create, companyValidator } from "../../models/companyModel.js";

export default async function createCompanyController(req, res) {
  const company = req.body;

  const { success, error, data: companyValidated } = companyValidator(company);

  if (!success) {
    return res.status(400).json({
      message: 'Erro ao cadastrar a empresa',
      errors: error.flatten().fieldErrors
    });
  }

  const result = await create(companyValidated);

  return res.json({
    message: "Empresa criada com sucesso",
    company: result
  });
}
