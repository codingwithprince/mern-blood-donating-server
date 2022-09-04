import mongoose from "mongoose";


const donatorSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true},
    age: { type: Number, required: true},
    phone: { type: Number, required: true},
    address: { type: String, required: true},
    lastDonated: { type: Date, required: true},
    bGroup: { type: String, required: true},
    gender: { type: String, required: true},
})

const donatorModel = mongoose.model('donators', donatorSchema)


export default donatorModel;