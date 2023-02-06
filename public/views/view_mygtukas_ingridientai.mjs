import controller_handle_mygtukas_ingridientai_click from "../controllers/controller_handle_mygtukas_ingridientai_click.mjs"

 const view_mygtukas_ingridientai = function(param_container)

 {
    const button = document.createElement("button")
    button.style.margin = "0 1em 0 1em"
    button.innerHTML = "Ingredientai"
    button.addEventListener("click", controller_handle_mygtukas_ingridientai_click)

    param_container.appendChild(button)
 }
 export default view_mygtukas_ingridientai