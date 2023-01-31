const view_receptas = function(param_container)
{
    const receptas = param_arr_receptai[i]

    const div = document.createElement("div")
    div.style.width = "15em"
    div.style.height = "15em"
    div.style.backgroundSize = "cover"
    
   // div.style.backgroundImage = `url('${receptas.strMealThumb}')`

    const span_strMeal = document.createElement("span")
    span_strMeal.innerHTML = receptas.strMeal
    span_strMeal.style.backgroundColor = "white"

    div.appendChild(span_strMeal)

    param_container.appendChild(div)
}