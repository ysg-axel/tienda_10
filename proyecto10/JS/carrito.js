
let btnFinalizarCompra = document.querySelector("#btnFinalizarCompra");
let contadorCarrito = document.querySelector("#contadorCarrito");
contadorCarrito.innerHTML = "0";

let carrito = [];

let agregarCarrito = (indice) => {
    carrito.push(productos[indice]);
    console.log("carrito:", carrito);
    renderProductosCarrito();
};

let renderProductosCarrito = () => {
    productosCarrito.innerHTML = "";
    if(carrito.length == 0) {
        productosCarrito.innerHTML = `
        <h3 class='text-center'>
        No hay productos en el carrito
        </h3>`;
        btnFinalizarCompra.style.display = "none";
        contadorCarrito.innerHTML = "0";    
        return;
    }
    else {
        contadorCarrito.innerHTML = carrito.length;
        btnFinalizarCompra.style.display = "block";
    }
    carrito.forEach( (producto,indice) => {
        productosCarrito.innerHTML += `
            <div class="row">
                <div class="col-12 col-md-3 border p-2">
                    <img  src="${ producto.image }"
                    class="card-img-top w-50" alt="...">
                </div>
                <div class="col-12 col-md-3 border p-2">
                    <h5 class="card-title">${ producto.title }</h5>
                </div>
                <div class="col-12 col-md-3 border p-2">
                    <p class="text-danger fw-bold">$${ producto.price }
                    USD</p>
                </div>
                <div class="col-12 col-md-3 border p-2 text-center">
                    <a href="#" onclick="eliminarCarrito(${ indice })"
                    class="btn btn-danger">
                    Eliminar
                    </a>
                </div>
            </div>`;
    });
};

let eliminarCarrito = (indice) => {
    carrito.splice(indice,1);
    renderProductosCarrito();
};