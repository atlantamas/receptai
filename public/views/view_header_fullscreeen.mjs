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

    param_container.appendChild(div)

}
export default view_header_fullscreeen