import model_gauti_receptu_ingridientus from "../models/model_gauti_receptu_ingridientus.mjs"
import view_ingredientai from "./view_ingridientai.mjs"

const controller_handle_click = async function ()
{
   const result_of_model_gauti_receptu_ingridientus = await model_gauti_receptu_ingridientus()

   const arr_ingredientai = result_of_model_gauti_receptu_ingridientus.meals

   view_ingredientai(
      document.getElementsByTagName("main")[0],
      arr_ingredientai
   )

   controller_check_header()
}

const view_mygtukas_ingridientai = function (param_container)
{
   const button = document.createElement("button")
   button.style.margin = "0 1em 0 1em"
   button.innerHTML = "Ingredientai"
   button.addEventListener("click", controller_handle_click)

   param_container.appendChild(button)
}

export default view_mygtukas_ingridientai