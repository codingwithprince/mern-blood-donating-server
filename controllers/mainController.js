import donatorModel from "../models/donatorsModel.js";
class mainController{
    static getAllData = async (req, res) => {
        try {
            const result = await donatorModel.find()
            res.send(result)
        } catch (error) {
            console.log(error);
        }
    }

    static registerDonator = async (req, res) => {
        try {
            const doc = donatorModel(req.body)
            const result = await doc.save()
            res.send(result)
        } catch (error) {
            console.log(error);
        }
    }
}

export default mainController;