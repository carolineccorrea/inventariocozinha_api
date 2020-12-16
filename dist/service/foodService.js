"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foodRespository_1 = require("../repository/foodRespository");
class foodService {
    get() {
        return foodRespository_1.default.find({});
    }
    getById(_id) {
        return foodRespository_1.default.findById(_id);
    }
    create() {
    }
    update() {
    }
}
exports.default = new foodService();
