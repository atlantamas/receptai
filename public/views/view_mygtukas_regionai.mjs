import controller_check_header from "../controllers/controller_check_header.mjs"
import model_gauti_receptu_regionus from "../models/model_gauti_receptu_regionus.mjs"
import view_regionai from "./view_regionai.mjs"

const controller_handle_click = async function ()
{
    const result_of_model_gauti_receptu_regionus = await model_gauti_receptu_regionus()

    const arr_regionai = result_of_model_gauti_receptu_regionus.meals

    //main

    view_regionai(
        document.getElementsByTagName("main")[0],
        arr_regionai
    )

    //header

    controller_check_header()
}

const view_mygtukas_regionai = function (param_container)
{

    const button = document.createElement("button")
    button.style.margin = "0 1em 0 1em"
    button.innerHTML = "Regionai"
    button.addEventListener(
        "click",
        controller_handle_click)

    param_container.appendChild(button)
}

export default view_mygtukas_regionai