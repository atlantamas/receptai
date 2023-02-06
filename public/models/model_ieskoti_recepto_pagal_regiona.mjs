const model_ieskoti_recepto_pagal_regiona = async function (param_regionas)
{
    const result_of_fetch = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${param_regionas}`)

    const result_of_json = await result_of_fetch.json()

    return result_of_json
}

export default model_ieskoti_recepto_pagal_regiona