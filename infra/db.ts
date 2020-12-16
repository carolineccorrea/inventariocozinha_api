import * as mongoose from 'mongoose'

class Db {
    private DB_URL = "mongodb+srv://admin:xpto123@cluster0.snge5.mongodb.net/inv_cozinha?retryWrites=true&w=majority";

    createConnection() {
        mongoose.connect(this.DB_URL);
    }
}

export default Db;