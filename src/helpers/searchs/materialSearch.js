export default function materialSearch (datos, temp) {

    const resultado_clientes = datos.filter(cliente => {
        return  cliente.codigo.toLowerCase().includes( temp.toLowerCase() ) ||
                cliente.descripcion.toLowerCase().includes( temp.toLowerCase()) ||
                cliente.cantidad.toLowerCase().includes( temp.toLowerCase()) ||
                cliente.precioCompra.toLowerCase().includes( temp.toLowerCase()) ||
                cliente.precioVenta.toLowerCase().includes( temp.toLowerCase()) ||
                cliente.proovedor[0].nombre.toLowerCase().includes( temp.toLowerCase()) 
    })
    return resultado_clientes
}