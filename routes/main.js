const index       = require("./index");
const dosens      = require("./dosens")
const mahasiswas  = require("./mahasiswas");
const matkuls     = require("./matkuls")

const routes = (app) => {
    app.use("/", index)
    app.use("/dosen", dosens)
    app.use ("/mahasiswa", mahasiswas)
    app.use("/matkul", matkuls)
}

module.exports = routes