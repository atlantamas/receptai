import controller_handle_mygtukas_regionai_click from "../controllers/controller_handle_mygtukas_regionai_click.mjs"

const view_mygtukas_regionai = function ( param_container)
{

    const button = document.createElement("button")
    button.style.margin = "0 1em 0 1em"
    button.innerHTML = "Regionai"
    button.addEventListener("click", controller_handle_mygtukas_regionai_click)

    param_container.appendChild(button)
}

export default view_mygtukas_regionai