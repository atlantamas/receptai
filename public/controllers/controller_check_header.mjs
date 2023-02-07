import view_header_deskstop from "../views/view_header_deskstop.mjs"
import view_header_header_mobile from "../views/view_header_header_mobile.mjs"

const controller_check_header = function ()
{
    const header = document.getElementsByTagName("header")[0]
    header.style.overflow = "auto"


    //overflow check

    if (window.innerWidth < 760)
    {
        view_header_header_mobile(header)
    }
    else
    {
        view_header_deskstop(header)
    }
}
export default controller_check_header