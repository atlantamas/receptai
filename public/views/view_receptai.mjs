const view_receptai = function (param_container, param_arr_receptai)
{
    param_container.innerHTML = ""

    for (var i = 0; i < param_arr_receptai.length; i++)
    {
        const receptas = param_arr_receptai[i]

        const div = document.createElement("div")
        div.style.width = "15em"
        div.style.height = "15em"
        div.style.backgroundSize = "cover"

        div.style.backgroundImage = `url('${receptas.strMealThumb}')`

        const span_strMeal = document.createElement("span")
        span_strMeal.innerHTML = receptas.strMeal
        span_strMeal.style.backgroundColor = "white"

        div.appendChild(span_strMeal)

        param_container.appendChild(div)
    }
}

export default view_receptai