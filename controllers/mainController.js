import donatorModel from "../models/donatorsModel.js";
import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt'

class mainController{
    static getAllData = async (req, res) => {
        try {
            const result = await donatorModel.find()
            res.send(result)
        } catch (error) {
            console.log(error);
        }
    }

    static singleInfo = async (req, res) => {
        try {
            const result = await donatorModel.findById(req.params.id)
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

    static getDonatorForUpdate = async (req, res) =>{
        try {
            const result = await donatorModel.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error);
        }
    }

    static updateDonator = async (req, res) => {
        try {
            await donatorModel.findByIdAndUpdate(req.params.id, req.body)
            res.send('Done')
        } catch (error) {
            console.log(error);
        }
    }

    static deleteDonator = async (req, res) => {
        try {
            await donatorModel.findByIdAndDelete(req.params.id)
            res.send('Deleted')
        } catch (error) {
            console.log(error);
        }
    }

    // static createUser = async(req, res) => {
    //     try {
    //         const userDoc = userModel({
    //             email: 'redrosemission@gmail.com',
    //             password: await bcrypt.hash('redrosemission12', 10)
    //         })
    //         await userDoc.save()
    //         res.send('Created')
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    static getUser = async(req, res) => {
        try {
            const result = await userModel.find()
            res.send(result) 
        } catch (error) {
            console.log(error);
        }
    }
}

export default mainController;