import model_gauti_recepta_pagal_id from "../models/model_gauti_recepta_pagal_id.mjs"

const view_receptas = async function (param_container, param_idMeal)
{
    //

    const result_of_model_gauti_recepta_pagal_id = await model_gauti_recepta_pagal_id(param_idMeal)

    const receptas = result_of_model_gauti_recepta_pagal_id.meals[0]

    //

    param_container.innerHTML = ""

    //span_idMeal

    const span_idMeal = document.createElement("span")
    span_idMeal.innerHTML = param_idMeal

    //span_strInstructions

    const span_strInstructions = document.createElement("span")
    span_idMeal.innerHTML = receptas.strInstructions

    //iframe_youtube_video

    const iframe_youtube_video = document.createElement("iframe")
    iframe_youtube_video.style.width = "42em"
    iframe_youtube_video.style.height = "31.5em"

    const result_of_replace = receptas.strYoutube.replace("watch","")

    iframe_youtube_video.src = result_of_replace

    //button

    const button = document.createElement("button")
    button.innerHTML = "Uzdaryti"
    button.addEventListener("click", function ()
    {
        param_container.style.display = "none"

    })

    //appenChild

    param_container.appendChild(span_idMeal)
    param_container.appendChild(span_strInstructions)
    param_container.appendChild(iframe_youtube_video)
    param_container.appendChild(button)

    //

    param_container.style.display = "grid"

}

export default view_receptas