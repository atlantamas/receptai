import view_mygtukas_ingridientai from "./view_mygtukas_ingridientai.mjs"
import view_mygtukas_kategorijos from "./view_mygtukas_kategorijos.mjs"
import view_mygtukas_regionai from "./view_mygtukas_regionai.mjs"
import view_recepto_paieska from "./view_recepto_paieska.mjs"

const view_header_fullscreeen = function (param_container)
{
    const div = document.createElement("div")

    div.style.width = "100%"
    div.style.height = "100%"
    div.style.padding = "0"
    div.style.border = "0"
    div.style.margin = "0"

    div.style.backgroundColor = "rgba(100, 130, 100, 0.9)"

    div.style.position = "fixed"
    div.style.left = "0"
    div.style.top = "0"

    div.style.display = "grid"
    div.style.gridTemplateColumns = "auto"
    div.style.placeContent = "center center"
    div.style.placeItems = "center center"
    div.style.gap = "1em 0"

    view_mygtukas_kategorijos(div)

    view_mygtukas_regionai(div)

    view_mygtukas_ingridientai(div)

    view_recepto_paieska(div)

    param_container.innerHTML = ""
    param_container.appendChild(div)
}

export default view_header_fullscreeen