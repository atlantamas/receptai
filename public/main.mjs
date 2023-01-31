import view_recepto_paieska from "../views/view_recepto_paieska.mjs";
import model_gauti_naujausius_receptus from "./models/model_gauti_naujausius_receptus.mjs";
import view_receptai from "./views/view_receptai.mjs";

view_recepto_paieska(

    document.getElementById("view_recepto_paieska")
)

const handle_click = async function ()
{
    const result_of_model_gauti_naujausius_receptus = await model_gauti_naujausius_receptus()

    view_receptai(document.getElementsByTagName("main")[0],
        result_of_model_gauti_naujausius_receptus.meals
    )
}

document
    .getElementById("button_naujausi_receptai")
    .addEventListener("click", handle_click)