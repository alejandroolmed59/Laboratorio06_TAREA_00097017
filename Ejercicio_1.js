function mostrarMenu(){
    console.log("1.Agregar Producto \n2.Modificar Stock\n3.Registrar venta(reducir stock)\n4.Promedio de ventas\n5.Productos con stock 0\n6.Mostrar todos los productos\n7.Salir");
}
function menu(opcion){
    switch(opcion){
        case 1:
            Ingresar();
            break;
        case 2:
            Modificar();
            break;
        case 3:
            RegistrarVenta();
            break;
        case 4:
            mostrarPromedioVentas();
            break;
        case 5:
            MostrarStock0();
            break;
        case 6:
            MostrarTodo();
            break;
        case 7:
            alert("Adios");
            console.log("Adios");
            isRunning=false;
            break;
        default:
            alert("Adios");
            console.log("Adios");
            isRunning=false;
            break;
    }

}
function Ingresar(){
    var codigo= Number(prompt("Codigo"));
    var descripcion= prompt("Descripcion");
    var tipo= prompt("Tipo");
    var precio_compra= Number(prompt("Precio de compra"));
    var precio_venta= Number(prompt("Precio de venta"));
    var stock= Number(prompt("stock"));
    arregloProductos.push(new Producto(codigo, descripcion, tipo, precio_compra, precio_venta, stock));
}
function Modificar(){
    var codigoABuscar= Number(prompt("Codigo del producto que quiere modificar el stock"));
    var flag=0;
    for (let i = 0; i < arregloProductos.length; i++) {
        if(arregloProductos[i].codigo==codigoABuscar){
            var nuevoStock= Number(prompt("Nuevo stock del producto?"));
            if(nuevoStock>=0){
                arregloProductos[i].stock=nuevoStock;
                flag=1;
                alert("Se ha modificado con exito")
            }else{
                alert("ERROR: Stock no puede ser negativo");
            }
        }
    }
    if(flag==0){
        alert("ERROR: Producto no encontrado");
    }
}
function RegistrarVenta(){
    var codigoABuscar= Number(prompt("Codigo del producto que vendio"));
    var flag=0;
    for (let i = 0; i < arregloProductos.length; i++) {
        if(arregloProductos[i].codigo==codigoABuscar){
            var venta= Number(prompt("Cuantas unidades vendio?"));
            if(arregloProductos[i].stock-(venta)>=0){
                arregloVentas.push(new Venta(arregloProductos[i].codigo, arregloProductos[i].precio_venta, venta));
                arregloProductos[i].stock-=venta;
                alert("La venta se ha registrado con exito");
            }else{
                alert("ERROR: No puede vender mas de las unidades que tiene");
            }
            flag=1;
        }
    }
    if(flag==0){
        alert("ERROR: Producto no encontrado");
    }
}
function mostrarPromedioVentas(){
    var totalVendido=0;
    if(arregloVentas.length==0){
        return;
    }
    for(let i = 0; i < arregloVentas.length; i++){
        totalVendido+=arregloVentas[i].TotalVenta;
    }
    alert("El promedio de ventas ha sido de: $"+(totalVendido/arregloVentas.length));
}
function MostrarStock0(){
    for (let i=0; i<arregloProductos.length; i++){
        if(arregloProductos[i].stock==0){
            console.log("Producto "+(i+1));
            console.log("Codigo:"+arregloProductos[i].codigo);
            console.log("Descripcion:"+arregloProductos[i].descripcion);
            console.log("Tipo:"+arregloProductos[i].tipo);
            console.log("Precio de compra: $"+arregloProductos[i].precio_compra);
            console.log("Precio de venta: $"+arregloProductos[i].precio_venta);
            console.log("Stock :"+arregloProductos[i].stock);
        }
    }
}
function MostrarTodo(){
    for (let i=0; i<arregloProductos.length; i++){
        console.log("Producto "+(i+1));
        console.log("Codigo:"+arregloProductos[i].codigo);
        console.log("Descripcion:"+arregloProductos[i].descripcion);
        console.log("Tipo:"+arregloProductos[i].tipo);
        console.log("Precio de compra: $"+arregloProductos[i].precio_compra);
        console.log("Precio de venta: $"+arregloProductos[i].precio_venta);
        console.log("Stock :"+arregloProductos[i].stock);
    }
}
//"MAIN"
var isRunning=true;
class Producto{
    constructor(codigo, descripcion, tipo, precio_compra, precio_venta, stock){
        this.codigo=codigo;
        this.descripcion=descripcion;
        this.tipo=tipo; 
        this.precio_compra=precio_compra;
        this.precio_venta=precio_venta;
        this.stock=stock;
    }
} 
class Venta{
    constructor(codigo, precio_venta, unidades){
        this.codigo=codigo;
        this.precio_venta=precio_venta;
        this.unidades=unidades;
        this.TotalVenta=(unidades*precio_venta);
    }
}
var arregloProductos=[];
var arregloVentas=[];
while(isRunning){
    mostrarMenu();
    var opcion= parseInt(prompt("Que desea hacer xd?"));
    menu(opcion);
}