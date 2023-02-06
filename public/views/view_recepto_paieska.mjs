import controller_handle_recepto_paieska_click from "../controllers/controller_handle_recepto_paieska_click.mjs"

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

    button.addEventListener(
        "click",
        function () { controller_handle_recepto_paieska_click(input.value) })

    //

    param_container.appendChild(div)
}

export default view_recepto_paieska
