//ACA SIGUE SIENDO FRONT 

const socket = io() ; 

const productsContainer = document.getElementById("products_table_body");

socket.on("products", (products) => {
  const allProductsElements = products
    .map(
      (product) => `
        <tr>
            <td> ${product.title} </td>
            <td> ${product.price} </td>
            <td> ${product.code} </td>
        </tr>
    `
    )
    .join(" ");

  productsContainer.innerHTML = allProductsElements;
});

 

