import express from "express"
import createClientController from "../controllers/client/createClientController.js"
import getClientController from "../controllers/client/getClientController.js"
import changeClientController from "../controllers/client/changeClientController.js"
import deleteClientController from "../controllers/client/deleteClientController.js"
import uptadeClientController from "../controllers/client/uptadeClientController.js"

const router = express.Router()


router.get('/', getClientController)
router.post('/', createClientController)
router.patch('/:id', changeClientController)
router.delete('/:id', deleteClientController)
router.put('/:id', uptadeClientController)

export default router