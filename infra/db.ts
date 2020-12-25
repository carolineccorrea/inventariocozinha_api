import * as mongoose from 'mongoose'

class Db {
    private DB_URL = "mongodb+srv://admin:xpto123@cluster0.snge5.mongodb.net/inventario_cozinha?retryWrites=true&w=majority";

    createConnection() {
       // mongoose.connect(this.DB_URL);
        mongoose.connect(this.DB_URL, { useNewUrlParser:true, useUnifiedTopology: true})
        .then(conn => console.log("conexao com o banco ok"))
        .catch(err => console.log("erro ao se conectar com o banco")) 
    }
}

export default Db;