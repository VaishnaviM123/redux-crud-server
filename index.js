const jsonServer = require('json-server')

const itemServer = jsonServer.create()

const cors = require('cors')
itemServer.use(cors())

const mw = jsonServer.defaults()
itemServer.use(mw)

const router = jsonServer.router('db.json')
itemServer.use(router)

const PORT=7000
itemServer.listen(PORT,()=>{console.log(`server running at ${PORT}`)})