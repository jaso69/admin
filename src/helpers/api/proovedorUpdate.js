export default async function proovedorUpdate (formData){
    return await fetch(`http://localhost:3000/api/clients/${formData._id}`, { 
        method: 'POST', 
        headers: {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"},
        body: JSON.stringify( formData )
    })
    .then (data => data)   
}