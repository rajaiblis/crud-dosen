const express = require('express');
const router = express.Router();
const { buat, semua, detail, ubah, hapus } = require("../actions/Dosen/dosens");

router.post("/", async (req, res) => {
    try {
        let data = await buat(req)

        return res.status(200).json({ // yang dimaksud 200 json adalah respon sukses
            status: "Sukses",
            data,
            message: "Data dosen berhasil dibuat !"   
        })
    } catch(err){
        return res.status(400).json({ // yang dimaksud 400 json adalah respon error
            status: "Error",
            message: err.message
        })
    }
});

router.get("/", async (req, res) => {
    try{
        let data = await semua()

        return res.send({
            status: "Sukses",
            data,
            message: "Semua data tampil !"
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
        let data = await detail(id)

        return res.status(200).json({
            status: "sukses",
            data,
            message: "Detail data dosen !"
        })
    } catch(err){
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
});

router.put("/:id", async (req,res) => {
    let { id } = req.params
    let update_data = {
        nik: req.body.nik,
        nama: req.body.nama, 
        email: req.body.email,
        tlp: req.body.tlp,
        matkul: req.body.matkul
    }

    try {
        let data = await ubah(id, update_data)

        return res.status(200).json({
            status: "Sukses",
            data,
            message: "Data Dosen berhasil diubah !"
        })
    } catch(err){
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
});

router.delete("/:id", async (req, res) => {
    let { id } = req.params

    try {
        let data = await hapus(id)

        return res.status(200).json({
            status: "Sukses",
            data,
            message: "Data Dosen berhasil hapus"
        })
    } catch(err){
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
});

module.exports = router










