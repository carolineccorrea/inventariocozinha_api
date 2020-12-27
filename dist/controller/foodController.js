"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const foodService_1 = require("../service/foodService");
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
class FoodController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield foodService_1.default.get();
                helper_1.default.sendResponse(res, HttpStatus.OK, response);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                let result = foodService_1.default.getById(_id);
                helper_1.default.sendResponse(res, HttpStatus.OK, result);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let vm = req.body;
                yield foodService_1.default.create(vm);
                helper_1.default.sendResponse(res, HttpStatus.OK, "Alimento cadastrado com sucesso");
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                let vm = req.body;
                yield foodService_1.default.update(_id, vm);
                helper_1.default.sendResponse(res, HttpStatus.OK, "Alimento alterado com sucesso");
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                yield foodService_1.default.delete(_id);
                helper_1.default.sendResponse(res, HttpStatus.OK, "Alimento deletado com sucesso");
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new FoodController();
