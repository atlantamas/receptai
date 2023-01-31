import express from 'express'

const expres_1 = express()

//

expres_1.use(express.static("public"))

//

expres_1.listen(80)