import FoodService from '../service/foodService'
import * as HttpStatus from 'http-status'
import Helper from '../infra/helper'

class FoodController {
    sendResponse = function (res, statusCode, data) {
        res.status(statusCode).json({ result: data })
    }

    get(req, res) {
        FoodService.get()
            .then(food => Helper.sendResponse(res, HttpStatus.OK, food))
            .catch(error => console.error.bind(console, `Erro ${error}`))
    }

    getById(req, res) {
        const _id = req.params.id;
        FoodService.getById(_id)
            .then(food => Helper.sendResponse(res, HttpStatus.OK, food))
            .catch(error => console.error.bind(console, `Erro ${error}`))
    }

    create(req, res) {
        let vm = req.body;
        FoodService.create(vm)
            .then(food => Helper.sendResponse(res, HttpStatus.OK, "Alimento cadastrado com sucesso"))
            .catch(error => console.error.bind(console, `Erro ${error}`))
    }

    update(req, res) {
        const _id = req.params.id;
        let vm = req.body;
        FoodService.update(_id, vm)
            .then(food => Helper.sendResponse(res, HttpStatus.OK, "Alimento alterado com sucesso"))
            .catch(error => console.error.bind(console, `Erro ${error}`))
    }

    delete(req, res) {
        const _id = req.params.id;
        FoodService.delete(_id)
        .then(() => Helper.sendResponse(res,HttpStatus.OK,"Alimento deletado com sucesso"))
        .catch(error => console.error.bind(console, `Erro ${error}`))
    }
}

export default new FoodController()