 const model_gauti_receptu_ingridientus =async function()
 {
    const result_of_fetch = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)

    const result_of_json = await result_of_fetch.json()

    return result_of_json
 }
 export default model_gauti_receptu_ingridientus