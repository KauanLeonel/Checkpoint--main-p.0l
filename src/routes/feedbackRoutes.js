import express from "express"
import createFeedbackController from "../controllers/feedback/createFeedbackController.js"
import getFeedbackController from "../controllers/feedback/getFeedbackController.js"
import changeFeedbackController from "../controllers/feedback/changeFeedbackController.js"
import deleteFeedbackController from "../controllers/feedback/deleteFeedbackController.js"
import uptadeFeedbackController from "../controllers/feedback/uptadeFeedbackController.js"

const router = express.Router()


router.get('/', getFeedbackController)
router.post('/', createFeedbackController)
router.patch('/:id', changeFeedbackController)
router.delete('/:id', deleteFeedbackController)
router.put('/:id', uptadeFeedbackController)

export default router