alert("Bienvenidos A Licoreria El Palmar")
// validando datos 
let nombre = prompt("Ingrese su Nombre")
let apellido = prompt("Ingrese su Apellido")
let dni = prompt("Ingrese su Dni")
let edad = prompt("Ingrese su Edad")
alert("Hola " + nombre)


if (edad >= 18) {
    alert ("Que deseas Comprar?")
} else { edad < 18
    alert("Edad no apta para Comprar")
}
// lista de productos 
let productos = [
    {nombre: "Cerveza", precio: 2500},
    {nombre: "Ginebra", precio: 3500},
    {nombre: "Tequila", precio: 5500},
    {nombre: "Ron", precio: 8500},
    {nombre: "Vodka", precio: 9500},
    {nombre: "Whisky", precio: 10500},
]

let carrito = []
// creando el menu 
function mostrarMenu() { 
    let menu = "1. Mostrar productos\n2. Comprar producto\n3. Eliminar producto\n4. Ver carrito\n5. Salir"; 
    let opcion = prompt(menu); 
    if(!opcion) return mostrarMenu(); 
    switch(opcion) { 
    case "1": 
    mostrarProductos(); 
    break; 
    case "2": 
    comprarProducto(); 
    break; 
    case "3": 
    eliminarProducto(); 
    break; 
    case "4": 
    verCarrito(); 
    break; 
    case "5": 
    alert("¡Gracias por su compra!"); 
    return; 
    default: 
    alert("Opción inválida. Por favor, inténtelo de nuevo."); 
    } 
     
    // Repetir menú 
    mostrarMenu(); 
    } 
     
    // Función para mostrar los productos disponibles 
    function mostrarProductos() { 
    let listaProductos = "Productos disponibles:\n"; 
    productos.forEach(function(producto) { 
    listaProductos += producto.nombre + " - $" + producto.precio + "\n"; 
    }); 
    alert(listaProductos); 
    } 
     
    // Función para comprar un producto 
    function comprarProducto() { 
    let nombreProducto = prompt("Ingrese el nombre del producto que desea comprar:"); 
    if(!nombreProducto) return mostrarMenu(); 
    let producto = productos.find(function(producto) { 
    return producto.nombre.toLowerCase() === nombreProducto.toLowerCase(); 
    }); 
    if (producto) { 
    carrito.push(producto); 
    alert(producto.nombre + " agregado al carrito."); 
    } else { 
    alert("Producto no encontrado."); 
    } 
    } 
     
    // Función para eliminar un producto del carrito 
    function eliminarProducto() { 
    let nombreProducto = prompt("Ingrese el nombre del producto que desea eliminar:"); 
    if(!nombreProducto) return mostrarMenu(); 
    let indiceProducto = carrito.findIndex(function(producto) { 
    return producto.nombre.toLowerCase() === nombreProducto.toLowerCase(); 
    }); 
    if (indiceProducto !== -1) { 
    carrito.splice(indiceProducto, 1); 
    alert(nombreProducto + " eliminado del carrito."); 
    } else { 
    alert("Producto no encontrado en el carrito."); 
    } 
    } 
     
    // Función para ver los productos en el carrito 
    function verCarrito() { 
    if (carrito.length === 0) { 
    alert("Su carrito está vacío."); 
    } else { 
    let listaCarrito = "Productos en su carrito:\n"; 
    let total = 0; 
    carrito.forEach(function(producto) { 
    listaCarrito += producto.nombre + " - $" + producto.precio + "\n"; 
    total += producto.precio; 
    }); 
    alert(listaCarrito + "Total: $" + total); 
    } 
    } 
     
    // Mostrar menú 
    mostrarMenu();

alert("Vuelve pronto")











































