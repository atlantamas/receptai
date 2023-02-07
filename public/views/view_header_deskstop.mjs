import view_header_header_mobile from "./view_header_header_mobile.mjs"
import view_mygtukas_ingridientai from "./view_mygtukas_ingridientai.mjs"
import view_mygtukas_kategorijos from "./view_mygtukas_kategorijos.mjs"
import view_mygtukas_regionai from "./view_mygtukas_regionai.mjs"
import view_recepto_paieska from "./view_recepto_paieska.mjs"

const controller_handle_overflow = function ()
{
    view_header_header_mobile(
        document.getElementsByName("header")[0]
    )
}

const view_header_deskstop = function (param_container)
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
    div.style.placeContent = "center center"
    div.style.placeItems = "center center"

    div.style.overflow = "hidden"

    view_mygtukas_kategorijos(div)

    view_mygtukas_regionai(div)

    view_mygtukas_ingridientai(div)

    view_recepto_paieska(div)

    //

    div.addEventListener("onload", controller_handle_overflow)

    //

    param_container.innerHTML = ""
    param_container.appendChild(div)
}

export default view_header_deskstop