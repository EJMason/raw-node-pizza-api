const Server = require('./lib/Server')

const anotherRouter = require('./anotherRouter')


const router = Server.Router()

router.addRoute('GET', '/hello', (req, res) => {
  res.writeHead(200, router.defaultHeaders)

  const data = {
    statusCode: 200,
    data: 'Hello, butts'
  }
  res.end(JSON.stringify(data))
})

// this allows separating logic into different files
router.combineRouters(anotherRouter)

module.exports = router
