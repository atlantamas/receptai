const view_receptas = async function (param_container, param_receptas)
{
// paslepti main scrollbar 

    document.body.style.overflow = "hidden"

    //

    param_container.innerHTML = ""

    // span_idMeal

    const span_idMeal = document.createElement("span")
    span_idMeal.innerHTML = param_receptas.idMeal

    // span_strInstructions

    const span_strInstructions = document.createElement("span")
    span_idMeal.innerHTML = param_receptas.strInstructions

    // iframe_youtube_video

    const iframe_youtube_video = document.createElement("iframe")
    iframe_youtube_video.style.width = "42em"
    iframe_youtube_video.style.height = "31.5em"

    // mutate uri

    const result_of_replace = param_receptas.strYoutube.replace("watch", "embed")

    iframe_youtube_video.src = result_of_replace

    // button

    const button = document.createElement("button")
    button.innerHTML = "Uzdaryti"

    button.addEventListener("click", function ()
    {
        param_container.style.display = "none"
        document.body.style.overflow = "auto"
    })

    // appenChild

    param_container.appendChild(span_idMeal)
    param_container.appendChild(span_strInstructions)
    param_container.appendChild(iframe_youtube_video)
    param_container.appendChild(button)

    //

    param_container.style.display = "grid"
}

export default view_receptas