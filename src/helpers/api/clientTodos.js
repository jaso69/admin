export default async function clients(){
    let clientes = []
    const data = await fetch('http://localhost:3000/api/clients', {method: 'GET'})
    const resp = await data.json()
    clientes = resp.client.filter(client => client.status === true)
    return clientes
}