
export default async function nuevoCliente (formData){
    return await fetch('http://localhost:3000/api/clients', { 
        method: 'POST', 
        headers: {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"},
        body: JSON.stringify( formData )
    })
    .then (data => data)
    
}