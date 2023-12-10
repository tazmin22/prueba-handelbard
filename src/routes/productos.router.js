

// //http://localhost:8080/views/prod
// //ACA RENDERIZA TODOS LOS PRODUCTOS
// //IMPORTANTE PONER EL VIEWS/PROD PARA QUE LA RUTA FUNCIONE

// const router = Router()

const {Router} = require('express')
const {PManager} = require ("../managers/ProductManager.js")
const router = Router();

const productManager = new PManager ("./prueba.json")




router.get("/prod", async (req, res) => {
  res.render('productos', {
          title: 'productos',
          name: 'usuario'
        })
  try {
    const products = await productManager.getProducts();

    return res.json({ success: true, data: products });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, error: error.message });
  }
});



module.exports = router 
