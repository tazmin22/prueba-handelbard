const { Router } = require('express')

//http://localhost:8080/views
//ACA ES EL HOME DE LA TIENDA

const router = Router()


router.get('/', (req,res) =>{
    res.render('index', {
      title: 'TIENDITA',
      name: 'usuario'
    })
  })


//http://localhost:8080/views/realtimeproducts
  
  router.get("/realtimeproducts",  (req, res) => {
  res.render('real-time-products');
});



//   import { Router } from "express";

// const viewsRouter = Router();

// viewsRouter.get("/", (req, res) => {
//   res.render("home");
// });

// viewsRouter.get("/realtimeproducts", async (req, res) => {
//   res.render("real-time-products");
// });

// export { viewsRouter };

module.exports = router
