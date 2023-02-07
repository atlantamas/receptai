import view_header_fullscreeen from "./view_header_fullscreeen.mjs"

const controller_handle_meniu_button_click = function()
{
    view_header_fullscreeen(
        document.getElementsByTagName("header")[0]
    )
}

const view_header_header_mobile = function (param_container)
{
    const div = document.createElement("div")

    div.style.width = "100%"
    div.style.height = "5em"
    div.style.padding = "0"
    div.style.border = "0"
    div.style.margin = "0 0 1em 0"

    div.style.borderTop = "1px solid darkgray"
    div.style.borderBottom = "1px solid darkgray"
    div.style.display = "grid"
    div.style.gridTemplateColumns = "auto auto auto auto auto auto"
    div.style.gridTemplateRows = "auto"
    div.style.placeContent = "center end"
    div.style.placeItems = "center center"


    const button = document.createElement("button")
    button.style.width = "3em"
    button.style.height = "3em"
    button.style.margin = "0 0.5em 0 0"

    button.style.backgroundImage = "url('/media/menu.jpg')"
    button.style.backgroundSize = "cover"

    button.addEventListener("click", controller_handle_meniu_button_click)

    div.appendChild(button)

    param_container.innerHTML = ""
    param_container.appendChild(div)
}

export default view_header_header_mobile