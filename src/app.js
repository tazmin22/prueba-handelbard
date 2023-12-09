const express = require('express')
const handlebars = require('express-handlebars')
const {PManager} = require ("./ProductManager")
const productsRouter = require ("./routes/apis/products.router.js")
const cartsRouter = require ("./routes/apis/carts.router.js")
const viewsRouter = require ("./routes/views.router.js")


const app = express()
const port = 8080


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'))

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views')

app.use ('/views', viewsRouter)

app.use('/api/products/', productsRouter)
app.use('/api/carts/', cartsRouter)
app.use(( err, req, res, next)=>{
  console.error(err.stack)
  res.status(500).send('Error de server')
})

app.listen(port, () => {
  console.log(`Server funciona en port ${port}`);
});