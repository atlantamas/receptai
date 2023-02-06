import model_gauti_receptu_regionus from "../models/model_gauti_receptu_regionus.mjs"
import view_regionai from "../views/view_regionai.mjs"

const controller_handle_mygtukas_regionai_click = async function ()
{
    const result_of_model_gauti_receptu_regionus = await model_gauti_receptu_regionus()

    const arr_regionai = result_of_model_gauti_receptu_regionus.meals
    
    view_regionai(
        document.getElementsByTagName("main")[0],
        arr_regionai
    )

}

export default controller_handle_mygtukas_regionai_click