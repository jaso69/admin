export default function clienteSearch (datos, temp) {

    const resultado_clientes = datos.filter(cliente => {
        return  cliente.empresa.toLowerCase().includes( temp.toLowerCase() ) ||
                cliente.nombre.toLowerCase().includes( temp.toLowerCase()) ||
                cliente.apellido1.toLowerCase().includes( temp.toLowerCase()) ||
                cliente.apellido2.toLowerCase().includes( temp.toLowerCase()) ||
                cliente.direccion.toLowerCase().includes( temp.toLowerCase()) ||
                cliente.cuidad.toLowerCase().includes( temp.toLowerCase()) ||
                cliente.provincia.toLowerCase().includes( temp.toLowerCase()) ||
                cliente.codigoPostal.toLowerCase().includes( temp.toLowerCase()) ||
                cliente.cif.toLowerCase().includes( temp.toLowerCase()) 
    })
    return resultado_clientes
}