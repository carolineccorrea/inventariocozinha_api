import * as express from 'express'
import Db from './infra/db';
import foodController from './controller/foodController'
import * as bodyParser from 'body-parser';

class startUp {
    public app: express.Application;
    private _db: Db;
    private bodyParser;

    constructor() {
        this.app = express();
        this.routes();
        this.middler();
        this._db = new Db;
        this._db.createConnection();
    }

    middler() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    routes() {
        //rotas
        this.app.route("/api/v1/food").get(foodController.get)
        this.app.route("/api/v1/food/:id").get(foodController.getById)
        this.app.route("/api/v1/food").post(foodController.create)
        this.app.route("/api/v1/food/:id").put(foodController.update)
        this.app.route("/api/v1/food/:id").delete(foodController.delete)

    }
}

export default new startUp()