import * as express from 'express'
import Db from './infra/db';
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
        this.app.route("/").get((req, res) => {
            res.send({ teste: 'ok' })
        })
    }
}

export default new startUp()