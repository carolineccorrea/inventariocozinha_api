"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class Db {
    constructor() {
        this.DB_URL = "mongodb+srv://admin:xpto123@cluster0.snge5.mongodb.net/<dbname>?retryWrites=true&w=majority";
    }
    createConnection() {
        mongoose.connect(this.DB_URL);
    }
}
exports.default = Db;
