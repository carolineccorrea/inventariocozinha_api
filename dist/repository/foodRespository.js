"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const foodSchema_1 = require("../models/foodSchema");
exports.default = mongoose.model("food", foodSchema_1.default);
