import model_gauti_receptu_kategorijas from "../models/model_gauti_receptu_kategorijas.mjs"
import view_kategorijos from "../views/view_kategorijos.mjs"

const controller_handle_mygtukas_kategorijos_click = async function ()
{
    const result_of_model_gauti_receptu_kategorijas = await model_gauti_receptu_kategorijas()

    view_kategorijos(
        document.getElementsByTagName("main")[0],
        result_of_model_gauti_receptu_kategorijas.categories
    )

}

export default controller_handle_mygtukas_kategorijos_click