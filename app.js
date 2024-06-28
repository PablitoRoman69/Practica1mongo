const pablo = require ("mongoose") //instanciar 
const Mango = 'mongodb://localhost:27017/Libreria' //conexxión

pablo.connect (Mango)

//Promesa para corroborar si funciona
.then(()=>{
    console.log('Si funciona la primera práctica')
})
.catch((err)=>{
    console.log('No funcionó la primera práctica')
})

//esquemas para la base de datos es decir atrubitos como el escqueleto de la BD
const esquema_libreria = new pablo.Schema (
    {
        nombre:{
            type:String
        },
        genero:{
            type:String
        },
        numero_hojas:{
            type:Number
        },
        fecha_ini:{
            type:String
        },
        fecha_fin:{
            type:String
        },
        autor:{
            type:String
        },
        apepat:{
            type:String
        }
    }
)

//una colección es una tabla practicamente ya que en NoSQL se le llaman tablas...
const modelo_libreria = new pablo.model ('Libros', esquema_libreria)

//crear datos
modelo_libreria.create({
    nombre:"La Cabaña",
    genero:"Suspenso",
    numero_hojas: 300,
    fecha_ini: "24-08-23",
    fecha_fin:"22-01-24",
    autor:"Pablo",
    apepat:"Román"
})
