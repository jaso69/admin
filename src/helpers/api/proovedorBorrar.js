export default async function proovedorBorrar (formData){
    return await fetch(`http://localhost:3000/api/proovedor/${formData._id}`, { 
        method: 'DELETE', 
        headers: {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"},
        body: JSON.stringify( formData )
    })
    .then (data => data)   
}