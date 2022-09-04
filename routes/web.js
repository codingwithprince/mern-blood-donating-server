import express from 'express'
import mainController from '../controllers/mainController.js'
const router = express.Router()


router.get('/', mainController.getAllData)
router.post('/register', mainController.registerDonator)


export default router