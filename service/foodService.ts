import foodRepository from '../repository/foodRespository'

class foodService {

    async get() {
        return await foodRepository.find({})
    }

    async getById(_id) {
        return await foodRepository.findById(_id)
    }

    async create(food) {
        return await foodRepository.create(food)
    }

    async update(_id, food) {
        return await foodRepository.findByIdAndUpdate(_id, food)
    }

    async delete(_id) {
        return await foodRepository.findByIdAndRemove(_id)
    }
}

export default new foodService();