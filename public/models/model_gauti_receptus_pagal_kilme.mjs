const model_gauti_receptus_pagal_kilme = async function (param_reiksme)
{
    const result_of_fetch = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${param_reiksme}`)

    const result_of_json = await result_of_fetch.json()

    return result_of_json
}

export default model_gauti_receptus_pagal_kilme