import * as mongoose from 'mongoose'
import FoodSchema from '../models/foodSchema'

export default mongoose.model("food", FoodSchema)