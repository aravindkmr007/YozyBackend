const jsonServer = require("json-server")
const app = jsonServer.create()
const router = jsonServer.router("./empoly.json")
const middlewares = jsonServer.defaults()
app.use(middlewares)
app.use(jsonServer.bodyParser)
app.use(router)



app.listen(4000,() => 
{
    console.log("JSON Server is running")
})