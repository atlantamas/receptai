import model_ieskoti_recepto_pagal_regiona from "../models/model_ieskoti_recepto_pagal_regiona.mjs"
import view_receptai from "../views/view_receptai.mjs"

const controller_handle_mygtukas_regionas_click = async function (param_strArea)
{
    const result_of_model_ieskoti_recepto_pagal_regiona = await model_ieskoti_recepto_pagal_regiona(param_strArea)

    const arr_receptai = result_of_model_ieskoti_recepto_pagal_regiona.meals

    //    const result_of_stringyfy = JSON.stringify(result_of_model_ieskoti_recepto_pagal_regiona)

    //    alert(result_of_stringyfy)

    view_receptai(
        document.getElementsByTagName("main")[0],
        arr_receptai
    )
}
export default controller_handle_mygtukas_regionas_click