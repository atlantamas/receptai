import view_header_deskstop from "../views/view_header_deskstop.mjs"
import view_header_header_mobile from "../views/view_header_header_mobile.mjs"

const controller_handle_window_resice = function()
{
 if(window.innerWidth < 600)
 {
    view_header_deskstop(
        document.getElementsByTagName("header")[0]
    )
 }
 else
 {
    view_header_header_mobile(
        document.getElementsByTagName("header")[0]
    )

 }
}
export default controller_handle_window_resice