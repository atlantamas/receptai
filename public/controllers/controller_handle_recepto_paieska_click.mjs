import model_ieskoti_recepto from "../models/model_ieskoti_recepto.mjs"
import view_receptai from "../views/view_receptai.mjs"

const controller_handle_recepto_paieska_click = async function (param_tekstas)
{
    const result_of_model_ieskoti_recepto = await model_ieskoti_recepto(param_tekstas)

    view_receptai(
        document.getElementsByTagName("main")[0],
        result_of_model_ieskoti_recepto.meals)

}
export default controller_handle_recepto_paieska_click