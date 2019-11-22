const mongoose          = require("mongoose")
const Schema            = mongoose.Schema
const mongoosePaginate  = require("mongoose-paginate")

let mhsSchema = new Schema ({
    nomor_induk : Number,
    nama        : String,
    email       : String,
    tlp         : Number,
    jurusan     : String,
})

let Mahasiswa = mongoose.model("Mahasiswa", mhsSchema)

module.exports = Mahasiswa