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






//   import { Router } from "express";
// import { productManager } from "../managers/index.js";
// import { BadRequestError } from "../utils/errors.js";

// const productsRouter = Router();

// productsRouter.get("/", async (req, res) => {
//   try {
//     const products = await productManager.getProducts();

//     return res.json({ success: true, data: products });
//   } catch (error) {
//     console.log(error);
//     return res.json({ success: false, error: error.message });
//   }
// });

// productsRouter.get("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const product = await productManager.getById(id);

//     if (!product) {
//       throw new BadRequestError("El producto no existe");
//     }

//     return res.json({ success: true, data: product });
//   } catch (error) {
//     console.log(error);

//     const code = error.statusCode ?? 500;
//     return res.status(code).json({ success: false, error: error.message });
//   }
// });

// productsRouter.post("/", async (req, res) => {
//   try {
//     const { title, price, code } = req.body;

//     const product = await productManager.addProduct({ title, price, code });

//     const products = await productManager.getProducts();

//     // Emitimos a todos la lista actualizada
//     req.app.get("io").sockets.emit("products", products);

//     return res.json({ success: true, data: product });
//   } catch (error) {
//     console.log(error);

//     const code = error.statusCode ?? 500;
//     return res.status(code).json({ success: false, error: error.message });
//   }
// });

// export { productsRouter };



module.exports = router
