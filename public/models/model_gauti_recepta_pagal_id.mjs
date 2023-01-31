const model_gauti_recepta_pagal_id = async function (param_id)
{
    const result_of_fetch = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${param_id}`)

    const result_of_json = await result_of_fetch.json()

    return result_of_json
}

export default model_gauti_recepta_pagal_id