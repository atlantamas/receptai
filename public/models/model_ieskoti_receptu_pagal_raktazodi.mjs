const model_ieskoti_receptu_pagal_raktazodi = async function (param_reiksme)
{
    const result_of_fetch = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${param_reiksme}`)

    const result_of_json = await result_of_fetch.json()

    return result_of_json
}

export default model_ieskoti_receptu_pagal_raktazodi