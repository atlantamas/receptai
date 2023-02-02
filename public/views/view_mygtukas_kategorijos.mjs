import model_gauti_receptu_kategorijas from "../models/model_gauti_receptu_kategorijas.mjs"
import view_kategorijos from "./view_kategorijos.mjs"

const view_mygtukas_kategorijos =async function(param_container)
{
    const result_of_model_gauti_receptu_kategorijas =await model_gauti_receptu_kategorijas()

    //

    const button = document.createElement("button")
    button.innerHTML= "Kategorijos"
    button.addEventListener("click", function()
    {
        view_kategorijos(
            document.getElementsByTagName("main")[0],
            result_of_model_gauti_receptu_kategorijas.categories
        )
    })

    param_container.appendChild(button)
}

export default view_mygtukas_kategorijos