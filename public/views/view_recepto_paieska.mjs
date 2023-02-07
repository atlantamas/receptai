import model_ieskoti_receptu_pagal_raktazodi from "../models/model_ieskoti_receptu_pagal_raktazodi.mjs"
import view_receptai from "./view_receptai.mjs"

const controller_handle_click = async function (param_tekstas)
{
    const result_of_model_ieskoti_recepto = await model_ieskoti_receptu_pagal_raktazodi(param_tekstas)

    view_receptai(
        document.getElementsByTagName("main")[0],
        result_of_model_ieskoti_recepto.meals)

        //

        controller_check_header()
}

const view_recepto_paieska = function (param_container)
{
    const div = document.createElement("div")
    div.style.overflow = "hidden"

    //

    const input = document.createElement("input")
    input.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    input.style.fontSize = "1em"
    input.style.border = "0"
    input.style.borderBottom = "0.01em solid black"
    input.style.margin = "0 1em 0 1em"

    //

    const button = document.createElement("button")
    button.innerHTML = "🔎"

    //

    div.appendChild(input)
    div.appendChild(button)

    //

    button.addEventListener(
        "click",
        function () { controller_handle_click(input.value) })

    //

    param_container.appendChild(div)
}

export default view_recepto_paieska
