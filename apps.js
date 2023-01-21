alert("Bienvenidos a Licoreria El Palmar")

// constructores y arrays y sus push

class Clientes{
    constructor(nombre, apellido, edad, dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni
    }
}

// pido los datos por el promt 
let nombre = prompt("Ingrese Nombre")
let apellido = prompt("Ingrese Apellido")
let edad = prompt("Ingrese su edad ")
let dni = prompt("Ingrese Dni")

let cliente = new Clientes(nombre, apellido, edad, dni)
console.log(cliente)

if (edad >= 18) {
    alert ("Que deseas Comprar?")
}else {
    alert("Edad no apta para Comprar")
}

class Licores{
    constructor(nombre, proveedor, precio, id){
        this.nombre = nombre
        this.proveedor = proveedor
        this.precio = precio
        this.id = id
    }
    
}

const licores = []

licores.push(new Licores("Ron", "Crm",1500,1))
licores.push(new Licores("Whisky", "Metropolitan",15500,2))
licores.push(new Licores("Ginebra","Marfran",11500,3))
licores.push(new Licores("Tequila","Nube Azul",12200,4))
licores.push(new Licores("Vodka","Alnova",1500,5))

class Accesorios{
    constructor(nombre, proveedor, precio, id){
    this.nombre = nombre
    this.proveedor = proveedor
    this.precio = precio
    this.id = id
    }
}

const accesorios = []

accesorios.push(new Accesorios("Escarchador", "Soyfer",11500,1))
accesorios.push(new Accesorios("Vasos", "Lavanim",12500,2))
accesorios.push(new Accesorios("Esterilla", "StarHouse",5500,3))
accesorios.push(new Accesorios("Copas", "Lavanim",9500,4))
accesorios.push(new Accesorios("Mortero", "Barak",1500,5))


// funciones
let sumarCompras = (n1, n2,) => {return resultado = n1 + n2 }
let sumarIva = (n1) => {return resultado = n1 * 1.21}
let descuentoEfectivo = (n1 => {return resultado = n1 - (n1 *0.1)})


// nuestra variedad de Licores

alert(" Aca te dejamos lista de nuestros Licores")

// lista de productos

licores.forEach(element => {
    alert(` id: ${element.id}  ${element.nombre},  Proveedor: ${element.proveedor}, Precio: ${element.precio} ` )
}
    )

    let elegirLicores = prompt("indique el ID del licor que desea")
    let nombreLicores

    switch (elegirLicores) {
        case "1":
            let compra = licores[0]
            compraLicores = compra.precio
            nombreLicores = compra.nombre
            break;

            case "2":
                let compra1 = licores[1]
                compraLicores = compra1.precio
                nombreLicores = compra1.nombre
                break;

            case "3":
                let compra2 = licores[2]
                compraLicores = compra2.precio
                nombreLicores = compra2.nombre
            break; 

            case "4":
                let compra3 = licores[3]
                compraLicores = compra3.precio
                nombreLicores = compra3.nombre
            break;  

         case "5":
         let compra4 = licores[4]
         compraLicores = compra4.precio
         nombreLicores = compra4.nombre
        break;
    
        default:
            break;
    }

console.log(compraLicores)

// lista accesorios
alert("Aca tienes nuestra lista de Accesorios")

accesorios.forEach(element => {
    alert(` Id: ${element.id}, ${element.nombre},  Proveedor: ${element.proveedor}, Precio: ${element.precio}` )
}
    )

    let elegirAccesorios = prompt("indique el id del Accesorio que desea")
    let compraAccesorios
    let nombreAccesorios

    switch (elegirAccesorios) {
        case "1":
            let compra = accesorios[0]
            compraAccesorios = compra.precio
            nombreAccesorios = compra.nombre
            break;

            case "2":
                let compra1 =  accesorios[1]
                compraAccesorios = compra1.precio
                nombreAccesorios = compra1.nombre
                break;

            case "3":
                let compra2 =  accesorios[2]
                compraAccesorios = compra2.precio
                nombreAccesorios = compra2.nombre
            break; 

            case "4":
                let compra3 =  accesorios[3]
                compraAccesorios = compra3.precio
                nombreAccesorios = compra3.nombre
            break;  

         case "5":
         let compra4 =  accesorios[4]
         compraAccesorios = compra4.precio
         nombreAccesorios = compra4.nombre
        break;
    
        default:
            break;
    }

console.log(compraAccesorios)

// la compra

let compraFinal = sumarCompras(compraLicores, compraAccesorios)
console.log(compraFinal)
alert(`Compraste ${nombreLicores}, y un ${nombreAccesorios}. El Total es $ ${compraFinal}`)

let compraConIva = sumarIva(compraFinal)
console.log(compraConIva)

alert(`Tu Compra con IVA incluido total $ ${compraConIva}.`)

// pago en efectivo
alert("Tienes 10% pagando en efectivo")
let metodoDePago = prompt("Abonas en efectivo?")
let precioFinal
  console.log(metodoDePago)
if (metodoDePago == "efectivo") {
    console.log(metodoDePago)
    precioFinal = descuentoEfectivo(compraConIva)
    alert(`El precio final es $${precioFinal}`)
} else (metodoDePago != "efectivo" )
    alert("tu precio final es " + compraConIva )

    alert("Gracias por tu compra")











































