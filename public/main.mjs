import controller_handle_window_resice from "./controllers/controller_handle_window_resice.mjs";
import view_header_deskstop from "./views/view_header_deskstop.mjs";
import view_header_fullscreeen from "./views/view_header_fullscreeen.mjs";

view_header_deskstop(
    document.getElementsByTagName("header")[0]
)

view_header_fullscreeen(

    document.getElementById("view_header_fullscreeen")
)

window.addEventListener("resize", controller_handle_window_resice)

