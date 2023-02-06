const view_header_header_mobile = function(param_container)
{
const div = document.createElement("div")

div.style.width= "100%"
div.style.height= "5em"
div.style.padding= "0"
div.style.border= "0"
div.style.margin= "0 0 1em 0"

div.style.borderTop= "1px solid darkgray"
div.style.borderBottom= "1px solid darkgray"
div.style.display= "grid"
div.style.gridTemplateColumns= "auto auto auto auto auto auto"
div.style.gridTemplateRows= "auto"
div.style.placeContent= "right center"
div.style.placeItems= "center center"

const button = document.createElement("button")
button.innerHTML= "="

div.appendChild(button)

param_container.innerHTML=""
param_container.appendChild(div)

}
export default view_header_header_mobile