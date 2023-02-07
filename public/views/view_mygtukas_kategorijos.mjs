import controller_check_header from "../controllers/controller_check_header.mjs"
import model_gauti_receptu_kategorijas from "../models/model_gauti_receptu_kategorijas.mjs"
import view_kategorijos from "./view_kategorijos.mjs"

const controller_handle_click = async function ()
{
    const result_of_model_gauti_receptu_kategorijas = await model_gauti_receptu_kategorijas()

    //main

    view_kategorijos(
        document.getElementsByTagName("main")[0],
        result_of_model_gauti_receptu_kategorijas.categories
    )

    //

    controller_check_header()
}

const view_mygtukas_kategorijos = async function (param_container)
{
    const button = document.createElement("button")
    button.style.margin = "0 1em 0 1em"
    button.innerHTML = "Kategorijos"
    button.addEventListener(
        "click", 
        controller_handle_click)

    param_container.appendChild(button)
}

export default view_mygtukas_kategorijos