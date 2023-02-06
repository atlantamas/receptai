import model_ieskoti_receptu_ingredienta from "../models/model_ieskoti_receptu_ingredienta.mjs"
import view_receptai from "../views/view_receptai.mjs"

const controller_handle_mygtukas_ingredientas_click =async function(param_strIngridient)
{
    const result_of_model_ieskoti_receptu_ingredienta = await model_ieskoti_receptu_ingredienta(param_strIngridient)

    const arr_ingredientai = result_of_model_ieskoti_receptu_ingredienta.meals

    view_receptai(
        document.getElementsByTagName("main")[0],
        arr_ingredientai
    )
}
export default controller_handle_mygtukas_ingredientas_click