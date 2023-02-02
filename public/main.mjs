import view_recepto_paieska from "../views/view_recepto_paieska.mjs";
import model_gauti_naujausius_receptus from "./models/model_gauti_naujausius_receptus.mjs";
import model_gauti_recepta_kategorijoje from "./models/model_gauti_receptal_kategorijoje.mjs";
import model_gauti_recepta_pagal_id from "./models/model_gauti_recepta_pagal_id.mjs";
import model_gauti_receptu_kategorijas from "./models/model_gauti_receptu_kategorijas.mjs";
import view_mygtukas_kategorijos from "./views/view_mygtukas_kategorijos.mjs";
import view_receptai from "./views/view_receptai.mjs";

// model_gauti_recepta_pagal_id("52802")

// model_gauti_receptu_kategorijas()

// model_gauti_recepta_kategorijoje("Goat")

view_mygtukas_kategorijos(

    document.getElementById("view_mygtukas_kategorijos")
)

view_recepto_paieska(

    document.getElementById("view_recepto_paieska")
)

