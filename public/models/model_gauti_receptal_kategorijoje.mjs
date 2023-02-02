const model_gauti_recepta_kategorijoje = async function (param_kategorija)
{
    const result_of_fetch = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${param_kategorija} `)

    const result_of_json = await result_of_fetch.json()

    return result_of_json
}

export default model_gauti_recepta_kategorijoje