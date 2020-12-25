import * as mongoose from 'mongoose'

const FoodSchema = new mongoose.Schema({
    quantidade: { type: Number },
    peso: { type: String },
    perecivel: { type: Boolean }
});

export default FoodSchema;