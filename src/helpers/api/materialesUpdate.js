export default async function materialesUpdate (formData){
    return await fetch(`http://localhost:3000/api/materials/${formData._id}`, { 
        method: 'PATCH', 
        headers: {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"},
        body: JSON.stringify( formData )
    })
    .then (data => data)
    
}