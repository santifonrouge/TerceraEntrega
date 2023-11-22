const express = require('express');
const app = express();
const puerto = 5501; 

// Ruta para obtener productos
app.get('/productos', (req, res) => {
  // Acá es donde implemento la lógica para obtener tus productos desde la base de datos o cualquier fuente de datos que estés utilizando
  const productos = obtenerProductos();
  res.json(productos);
});

// Inicia el servidor
app.listen(puerto, () => {
  console.log(`Servidor iniciado en http://localhost:${5501}`);
});

// Función de ejemplo para obtener productos
function obtenerProductos() {
  return [
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
}