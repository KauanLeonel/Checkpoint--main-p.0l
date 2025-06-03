import express from "express"
import createRequestController from "../controllers/request/createRequestController.js"
import getRequestController from "../controllers/request/getRequestController.js"
import changeRequestController from "../controllers/request/changeRequestController.js"
import deleteRequestController from "../controllers/request/deleteRequestController.js"
import uptadeRequestController from "../controllers/request/uptadeRequestController.js"

const router = express.Router()


router.get('/', getRequestController)
router.post('/', createRequestController)
router.patch('/:id', changeRequestController)
router.delete('/:id', deleteRequestController)
router.put('/:id', uptadeRequestController)

export default router