const express   = require('express');
const router    = express.Router();
const { create, getAll, getDetail, update, destroy } = require("../actions/Mahasiswa/mahasiswas");

router.post("/buat", async (req, res) => {
    try {   
        let data = await create(req)

        return res.status(200).json({
            status: "Sukses",
            data,
            message: "Data mahasiswa berhasil dibuat !"
        })
    } catch(err){
        return res.status(400),json({
            status: "Error",
            message: err.message
        })
    }
});

router.get("/getAll", async (req, res) => {
    try {
        let data = await getAll()

        return res.send({
            status: "Sukses",
            data,
            message: "Semua Data mahasiswa"
        })
    } catch(err){
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
});

router.get("/:id", async (req, res) => {
    try {
        let { id } = req.params
        let data = await getDetail(id)

        return res.status(200).json({
            status: "Sukses",
            data,
            message: "Data Mahasiswa berhasil Tampil"
        })
    } catch(err){
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
}); 

router.put("/:id", async (req, res) => {
    let { id } = req.params
    let updated_data = {
        npm: req.body.npm,
        nama: req.body.nama,
        email: req.body.email,
        tlp: req.body.tlp,
        jurusan: req.body.jurusan  
    }

    try {
        let data = await update(id, updated_data)

        return res.status(200).json({
            status: "Sukses",
            data, 
            message: "Data Mahasiswa berhasil di update !"
        })
    } catch(err){
        return res.status(400).json({
            status: "Error Bos Hahaha",
            message: err.message
        })
    }
});

router.delete("/:id", async (req, res) => {
    let { id } = req.params

    try {
        let data = await destroy(id)

        return res.status(200).json({
            status: "Sukses",
            data,
            message: "Data mahasisea berhasil dihapus!"
        })
    } catch(err){
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
})

module.exports = router