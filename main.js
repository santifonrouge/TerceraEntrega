// Obtener elementos del DOM
const carritoContainer = document.querySelector('.carrito-container');
const carritoLista = document.getElementById('carrito-lista');
const carritoTotal = document.getElementById('carrito-total');
const cantidadCarrito = document.getElementById('cantidad-carrito');
const cerrarCarritoBtn = document.getElementById('cerrar-carrito');

const productosJSON = [
    {
        id: 'producto1',
        nombre: 'Almendras',
        precio: 1800,
        cantidad: 0,
    },
    {
        id: 'producto2',
        nombre: 'Avena',
        precio: 600,
        cantidad: 0,
    },
    {
        id: 'producto3',
        nombre: 'Miel',
        precio: 900,
        cantidad: 0,             
    },
    {
        id: 'producto4',
        nombre: 'Pasta de Mani',
        precio: 1500,
        cantidad: 0,                                                        
    },
    {
        id: 'producto5',
        nombre: 'Hummus',
        precio: 900,
        cantidad: 0,
    },
    {
        id: 'producto6',
        nombre: 'Nueces',
        precio: 1500,
        cantidad: 0,
    },
    {
        id: 'producto7',
        nombre: 'Mix Frutos Secos',
        precio: 1600,
        cantidad: 0,
    },
    {
        id: 'producto8',
        nombre: 'Mani',
        precio: 700,
        cantidad: 0,
    },

];

// Obtener productos desde localStorage o usar un array vacío si no hay productos guardados
const productosEnCarrito = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];

// Evento para abrir el carrito al hacer clic en el icono del carrito
const tarjetasProductos = document.querySelectorAll('.tarjeta');

tarjetasProductos.forEach(tarjeta => {
  const botonAgregar = tarjeta.querySelector('.bot');
  const idProducto = tarjeta.id;
  const nombreProducto = tarjeta.querySelector('.tarjeta_titulo').textContent;
  const precioProducto = parseInt(tarjeta.querySelector('.tarjeta_descripcion').textContent.replace('Precio por kg: $', ''));

  botonAgregar.addEventListener('click', () => {
    const producto = {
      id: idProducto,
      nombre: nombreProducto,
      precio: precioProducto
    };
    agregarAlCarrito(producto);
  });
});

// Evento para abrir el carrito al hacer clic en el icono del carrito
const carritoIcono = document.querySelector('.carrito-icono');
carritoIcono.addEventListener('click', () => {
  carritoContainer.style.display = 'flex';
  mostrarProductosEnCarrito();
});

// Evento para cerrar el carrito al hacer clic en el botón "Cerrar"
cerrarCarritoBtn.addEventListener('click', () => {
  carritoContainer.style.display = 'none';
});

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    const productoEnCarrito = productosEnCarrito.find(p => p.id === producto.id);
  
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      producto.cantidad = 1;
      productosEnCarrito.push(producto);
    }
  
    localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
    mostrarProductosEnCarrito();
  }

// Función para eliminar un producto del carrito
function eliminarProducto(indice) {
  productosEnCarrito.splice(indice, 1);
  localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
  mostrarProductosEnCarrito();
}

// Función para mostrar los productos en el carrito
function mostrarProductosEnCarrito() {
    carritoLista.innerHTML = '';
    let total = 0;
    let cantidadTotal = 0;
  
    productosEnCarrito.forEach(producto => {
      const { id, nombre, precio, cantidad } = producto;
      total += precio * cantidad;
      cantidadTotal += cantidad;
      const li = document.createElement('li');
      li.textContent = `${nombre} - $${precio} - Cantidad: ${cantidad}`;
      carritoLista.appendChild(li);
    });
  
    carritoTotal.textContent = `$${total}`;
    cantidadCarrito.textContent = cantidadTotal;
  }

// Función para reiniciar el carrito (vaciar todos los productos)
function reiniciarCarrito() {
  productosEnCarrito.length = 0;
  localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
  mostrarProductosEnCarrito();
}

// Asocia la función reiniciarCarrito a un botón o evento en tu HTML para que se ejecute cuando el usuario quiera reiniciar el carrito
const botonReiniciar = document.getElementById('boton-reiniciar');
botonReiniciar.addEventListener('click', reiniciarCarrito);

// Llama a la función mostrarProductosEnCarrito al cargar la página para mostrar los productos almacenados en el carrito
mostrarProductosEnCarrito();
