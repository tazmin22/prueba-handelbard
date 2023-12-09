const { Router } = require('express')

const router = Router()


router.get('/', (req,res) =>{
    res.render('index', {
      title: 'TIENDITA',
      name: 'usuario'
    })
  })


//   router.get('/produ', (req,res) =>{
//     res.render('productos', {
//       title: 'TIENDITA de productos',
//       name: 'usuario'
//     })
//   })


module.exports = router
