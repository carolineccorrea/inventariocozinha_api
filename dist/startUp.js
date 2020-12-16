"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class startUp {
    constructor() {
        this.app = express();
        this.routes();
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send({ teste: 'ok' });
        });
    }
}
exports.default = new startUp();
