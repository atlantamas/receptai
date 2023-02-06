import model_gauti_recepta_pagal_id from "../models/model_gauti_recepta_pagal_id.mjs"
import view_receptas from "../views/view_receptas.mjs"

const controller_handle_receptas_click = async function (param_idMeal)

{
    const result_of_model_gauti_recepta_pagal_id = await model_gauti_recepta_pagal_id(param_idMeal)

    const receptas = result_of_model_gauti_recepta_pagal_id.meals[0]

    view_receptas(
        document.getElementById("view_receptas"),
        receptas
    )

}

export default controller_handle_receptas_click