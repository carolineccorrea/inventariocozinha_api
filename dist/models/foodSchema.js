"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const FoodSchema = new mongoose.Schema({
    quantidade: { type: Number },
    peso: { type: String },
    perecivel: { type: Boolean }
});
exports.default = FoodSchema;
