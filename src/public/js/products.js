console.log('esto es de product js')


const socket = io() ; 

socket.on('connect', () => {
  console.log('Conexión establecida con el servidor de Socket.io')
})

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