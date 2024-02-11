export default async function materialNuevo (formData){
    return await fetch('http://localhost:3000/api/materials', { 
        method: 'POST', 
        headers: {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"},
        body: JSON.stringify( formData )
    })
    .then (data => data)   
}