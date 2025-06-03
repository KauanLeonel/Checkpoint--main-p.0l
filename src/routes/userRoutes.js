import express from "express"
import createUserController from "../controllers/user/createUserController.js"
import getUserController from "../controllers/user/getUserController.js"
import changeUserController from "../controllers/user/changeUserController.js"
import deleteUserController from "../controllers/user/deleteUserController.js"
import uptadeUserController from "../controllers/user/uptadeUserController.js"

const router = express.Router()


router.get('/', getUserController)
router.post('/', createUserController)
router.patch('/:id', changeUserController)
router.delete('/:id', deleteUserController)
router.put('/:id', uptadeUserController)

export default router