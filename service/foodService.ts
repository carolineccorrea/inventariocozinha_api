import foodRepository from '../repository/foodRespository'

class foodService {

    get() {
        return foodRepository.find({})
    }

    getById(_id) {
        return foodRepository.findById(_id)
    }

    create(food) {
        return foodRepository.create(food)
    }

    update(_id, food) {
        return foodRepository.findByIdAndUpdate(_id, food)
    }

    delete(_id) {
        return foodRepository.findByIdAndRemove(_id)
    }
}

export default new foodService();