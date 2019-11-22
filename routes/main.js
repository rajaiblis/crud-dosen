// const verifyToken   = require("../../middlewares/verify_token.middleware")
const users        = require("./users")
const dosens       = require("./dosen")
const Mahasiswas   = require("./mahasiswa") 
const Staf_Tu      = require("./TU")
const Mata_kuliah  = require("./matkul")
const indexs       = require("./index")
const auths        = require("./auth.route") 
const auth_dos     = require("./auths.route")

const route = (app) => {
    app.use("/user", users)
    app.use("/dosen", dosens)
    app.use("/mahasiswa", Mahasiswas)
    app.use("/TU", Staf_Tu)
    app.use("/matkul", Mata_kuliah)
    app.use("/index", indexs)
    app.use("/auth", auths)
    app.use("/auths", auth_dos)
}

module.exports = route