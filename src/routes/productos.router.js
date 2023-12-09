const { Router } = require('express')
//http://localhost:8080/views/prod
//ACA RENDERIZA TODOS LOS PRODUCTOS
//IMPORTANTE PONER EL VIEWS/PROD PARA QUE LA RUTA FUNCIONE

const router = Router()


router.get('/prod', (req,res) =>{
    res.render('productos', {
      title: 'TIENDITA',
      name: 'usuario'
    })
  })





module.exports = router
