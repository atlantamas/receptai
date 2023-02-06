import model_gauti_receptu_ingridientus from "../models/model_gauti_receptu_ingridientus.mjs"
import view_ingredientai from "../views/view_ingridientai.mjs"

const controller_handle_mygtukas_ingridientai_click = async function()
{
    const result_of_model_gauti_receptu_ingridientus = await model_gauti_receptu_ingridientus()

    const arr_ingredientai = result_of_model_gauti_receptu_ingridientus.meals

    view_ingredientai(
        document.getElementsByTagName("main")[0],
        arr_ingredientai
    )
}
export default controller_handle_mygtukas_ingridientai_click