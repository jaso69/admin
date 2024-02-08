export default async function proovedorNuevo (formData){
    return await fetch('http://localhost:3000/api/proovedor', { 
        method: 'POST', 
        headers: {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"},
        body: JSON.stringify( formData )
    })
    .then (data => data)
    
}