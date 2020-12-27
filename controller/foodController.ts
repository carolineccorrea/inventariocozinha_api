import FoodService from '../service/foodService'
import * as HttpStatus from 'http-status'
import Helper from '../infra/helper'

class FoodController {

    async get(req, res) {
        try {
            let response = await FoodService.get()
            Helper.sendResponse(res, HttpStatus.OK, response)
            

        } catch (error) {
            console.log(error)
        }
    }

    async getById(req, res) {
        try {
            const _id = req.params.id;
            let result = FoodService.getById(_id)
            Helper.sendResponse(res, HttpStatus.OK, result)
        } catch (error) {
            console.log(error)
        }
    }

    async create(req, res) {
        try {
            let vm = req.body;
            await FoodService.create(vm)
            Helper.sendResponse(res, HttpStatus.OK, "Alimento cadastrado com sucesso")

        } catch (error) {
            console.log(error)
        }
    }

    async update(req, res) {
        try {
            const _id = req.params.id;
            let vm = req.body;
           await FoodService.update(_id, vm)
            Helper.sendResponse(res, HttpStatus.OK, "Alimento alterado com sucesso")

        } catch (error) {
            console.log(error)
        }
    }

    async delete(req, res) {
        try {
            const _id = req.params.id;
           await FoodService.delete(_id)
            Helper.sendResponse(res, HttpStatus.OK, "Alimento deletado com sucesso")

        } catch (error) {
            console.log(error)
        }

    }
}

export default new FoodController()