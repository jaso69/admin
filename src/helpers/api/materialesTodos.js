export default async function materialesTodos(){
    let materials = []
    const data = await fetch('http://localhost:3000/api/materials', {method: 'GET'})
    const resp = await data.json()
    materials = resp.material.filter(mat => mat.status === true)
    return materials
}