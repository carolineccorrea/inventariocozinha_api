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
    create(food) {
        return foodRespository_1.default.create(food);
    }
    update(_id, food) {
        return foodRespository_1.default.findByIdAndUpdate(_id, food);
    }
    delete(_id) {
        return foodRespository_1.default.findByIdAndRemove(_id);
    }
}
exports.default = new foodService();
