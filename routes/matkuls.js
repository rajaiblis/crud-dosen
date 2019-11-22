const express  = require('express')
const router   = express.Router();
const { buat, semua, update } = require("../actions/Matkul/matkuls")  

router.post("/buat", async (req, res) => {
    try {
        let data = await buat(req)

        return res.status(200).json({
            status: "sukses",
            data,
            message: "Data matkul berhasil diinput"
        })
    } catch(err) {
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
});

router.get("/getAll", async (req, res) => {
    try {
        let data = await semua()

        return res.send({
            status: "Sukses",
            data,
            message: "Tampilan semua data matkul"
        })
    } catch(err) {
        return res.status(400).json({
            status: "Error",
            
            message: err.message
        })
    }
});



router.put("/:id", async (req, res) => {
    let { id } = req.params
    let updated_data = {
        nomatkul: req.body.nomatkul,
        namamatkul: req.body.namamatkul,
        dosen: req.body.dosen,
        semester: req.body.semester
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

module.exports = router