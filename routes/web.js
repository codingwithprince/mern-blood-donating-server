import express from 'express'
import mainController from '../controllers/mainController.js'
const router = express.Router()


router.get('/', mainController.getAllData)
router.get('/info/:id', mainController.singleInfo)
router.post('/register', mainController.registerDonator)
router.get('/update/:id', mainController.getDonatorForUpdate)
router.put('/update/:id', mainController.updateDonator)
router.delete('/delete/:id', mainController.deleteDonator)





export default router