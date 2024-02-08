export default async function proovedores(){
    let clientes = []
    const data = await fetch('http://localhost:3000/api/proovedor', {method: 'GET'})
    const resp = await data.json()
    clientes = resp.proovedor.filter(proovedor => proovedor.status === true)
    return clientes
}