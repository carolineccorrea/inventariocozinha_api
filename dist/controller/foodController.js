"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foodService_1 = require("../service/foodService");
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
class FoodController {
    constructor() {
        this.sendResponse = function (res, statusCode, data) {
            res.status(statusCode).json({ result: data });
        };
    }
    get(req, res) {
        foodService_1.default.get()
            .then(food => helper_1.default.sendResponse(res, HttpStatus.OK, food))
            .catch(error => console.error.bind(console, `Erro ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        foodService_1.default.getById(_id)
            .then(food => helper_1.default.sendResponse(res, HttpStatus.OK, food))
            .catch(error => console.error.bind(console, `Erro ${error}`));
    }
    create(req, res) {
        let vm = req.body;
        foodService_1.default.create(vm)
            .then(food => helper_1.default.sendResponse(res, HttpStatus.OK, food))
            .catch(error => console.error.bind(console, `Erro ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let vm = req.body;
        foodService_1.default.update(_id, vm)
            .then(food => helper_1.default.sendResponse(res, HttpStatus.OK, "Alimento alterado com sucesso"))
            .catch(error => console.error.bind(console, `Erro ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        foodService_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.OK, "Alimento deletado com sucesso"))
            .catch(error => console.error.bind(console, `Erro ${error}`));
    }
}
exports.default = new FoodController();
