import controller_handle_mygtukas_ingredientas_click from "../controllers/controller_handle_mygtukas_ingredientas_click.mjs"

const view_ingredientai = function (param_container, param_arr_ingredientai)
{
    param_container.innerHTML = ""

    //

    for (var i = 0; i < param_arr_ingredientai.length; i++)
    {
        const ingredientas = param_arr_ingredientai[i]

        // ingredientas tile

        const div = document.createElement("div")

        div.style.width = "15em"
        div.style.height = "4em"
        div.style.boxShadow = "0.2em 0.2em 0.2em rgb(200, 200, 200)"
        div.style.borderRadius = "0.2em"
        div.style.display = "grid"
        div.style.gridTemplateColumns = "auto"
        div.style.placeContent = "end center"
        div.style.placeItems = "center center"
        div.addEventListener("click",function(){controller_handle_mygtukas_ingredientas_click(ingredientas.strIngredient)} )
        //

        const span_strMeal = document.createElement("span")

        span_strMeal.innerHTML = ingredientas.strIngredient

        span_strMeal.style.width = "15em"
        span_strMeal.style.height = "4em"
        span_strMeal.style.backgroundColor = "white"
        span_strMeal.style.color = "#6799a9"
        span_strMeal.style.textAlign = "center"
        span_strMeal.style.lineHeight = "4em"
        span_strMeal.style.fontWeight = "500"
        span_strMeal.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        span_strMeal.style.overflow = "hidden"

        //

        div.appendChild(span_strMeal)

        //

        param_container.appendChild(div)

    }
}
export default view_ingredientai