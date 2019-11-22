const mongoose    = require('mongoose')
const Schema      = mongoose.Schema
 
let MatkulSchema  = new Schema ({
    nomatkul        : Number,
    namamatkul      : String,
    dosen           : String,
    semester        : String,
})    

let Matkul = mongoose.model("Matkul", MatkulSchema)

module.exports = Matkul