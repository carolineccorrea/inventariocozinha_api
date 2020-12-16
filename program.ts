import StartUp from './startUp'

let port = process.env.PORT || '3000'

StartUp.app.listen(port, function() {
    console.log(`servidor rodando ${port}`)
})