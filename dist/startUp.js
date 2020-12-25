"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const db_1 = require("./infra/db");
const foodController_1 = require("./controller/foodController");
const bodyParser = require("body-parser");
class startUp {
    constructor() {
        this.app = express();
        this._db = new db_1.default();
        this._db.createConnection();
        this.middler();
        this.routes();
    }
    middler() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        //rotas
        this.app.route("/api/v1/food").get(foodController_1.default.get);
        this.app.route("/api/v1/food/:id").get(foodController_1.default.getById);
        this.app.route("/api/v1/food").post(foodController_1.default.create);
        this.app.route("/api/v1/food/:id").put(foodController_1.default.update);
        this.app.route("/api/v1/food/:id").delete(foodController_1.default.delete);
    }
}
exports.default = new startUp();
