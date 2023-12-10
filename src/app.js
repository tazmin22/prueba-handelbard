const express = require('express')
const handlebars = require('express-handlebars')
const{Server} = require('socket.io')


const {PManager} = require ("./managers/ProductManager.js")
const productsRouter = require ("./routes/apis/products.router.js")
const cartsRouter = require ("./routes/apis/carts.router.js")
const viewsRouter = require ("./routes/views.router.js")
const newProductsRouter = require ("./routes/productos.router.js")


const app = express()
const port = 8080


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'))

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views')


//CONFIGURACION DE RUTA

app.use ('/views', viewsRouter)
app.use('/views', newProductsRouter )

app.use('/api/products/', productsRouter)
app.use('/api/carts/', cartsRouter)
app.use(( err, req, res, next)=>{
  console.error(err.stack)
  res.status(500).send('Error de server')
})

const serverHtpp= app.listen(port, () => {
  console.log(`Server funciona en port ${port}`);
});

//el profesor esta llamando a la const por socketServer aca lo deje como 'io'
//TODO ESTE LADO ES EL BACK-END

const io = new Server (serverHtpp)

//FUNCIONAMIENTO DE SOCKET


io.on("connection", async (socket) =>{
  console.log('nuevo cliente contectado')
})

