import controller_handle_mygtukas_kategorijos_click from "../controllers/controller_handle_mygtukas_kategorijos_click.mjs"
import model_gauti_receptu_kategorijas from "../models/model_gauti_receptu_kategorijas.mjs"

const view_mygtukas_kategorijos =async function(param_container)
{
    const result_of_model_gauti_receptu_kategorijas =await model_gauti_receptu_kategorijas()

    //

    const button = document.createElement("button")
    button.style.margin = "0 1em 0 1em"
    button.innerHTML= "Kategorijos"
    button.addEventListener("click", controller_handle_mygtukas_kategorijos_click)

    param_container.appendChild(button)
}

export default view_mygtukas_kategorijos