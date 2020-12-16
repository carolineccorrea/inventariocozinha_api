import * as express from 'express'
import Db from './infra/db';

class startUp {
    public app: express.Application;
    private _db: Db;

    constructor() {
        this.app = express();
        this.routes();

        this._db = new Db;
        this._db.createConnection();
    }

    routes(){
        this.app.route("/").get((req,res) => {
            res.send({ teste:'ok' })
        })
    }
}

export default new startUp()