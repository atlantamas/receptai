import model_ieskoti_recepto from "../models/model_ieskoti_recepto.mjs"
import view_receptai from "./view_receptai.mjs"

const view_recepto_paieska = function (param_container)
{
    const div = document.createElement("div")

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

    const handle_button_click = async function ()
    {
        const result_of_model_ieskoti_recepto = await model_ieskoti_recepto(input.value)
        view_receptai(
            document.getElementsByTagName("main")[0],
            result_of_model_ieskoti_recepto.meals)
    }

    button.addEventListener("click", handle_button_click)

    //

    param_container.appendChild(div)
}
export default view_recepto_paieska
