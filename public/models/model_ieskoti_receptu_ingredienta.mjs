const model_ieskoti_receptu_ingredienta =async function(param_ingredientas)
{
    const result_of_fetch = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${param_ingredientas}`)

    const result_of_json = await result_of_fetch.json()

    return result_of_json
}
export default model_ieskoti_receptu_ingredienta