const express      = require('express')
const router       = express.Router()
const { check }    = require("express-validator")
const DosenBuat    = require("../actions/Dosen/1buat.action")
const DosenList    = require("../actions/Dosen/2list.action")
const DosenTampil  = require("../actions/Dosen/3show.action")
const DosenCari    = require("../actions/Dosen/4.cari.action")
const DosenUbah    = require("../actions/Dosen/5.ubah.action")
const DosenHapus   = require("../actions/Dosen/6.hapus.action")
    
router.post("/", [
    check('nik').not().isEmpty(),
    check('nama').not().isEmpty(),
    check('email').not().isEmpty(),
    check('tlp').not().isEmpty(),
    check('matkul').not().isEmpty(),
    check('password').not().isEmpty().isLength({ min: 8 })
], async (req, res, next) => await new DosenBuat().exec(req, res, next))


router.get("/list", async (req, res, next) =>
    await new DosenList().exec(req, res, next))


router.get("/:id", async (req, res, next) => 
    await new DosenTampil().exec(req, res, next))    


router.get("/", async (req, res, next) =>
    await new DosenCari().exec(req, res, next))    


router.put("/:id", async (req, res, next) =>
    await new DosenUbah().exec(req, res, next))


router.delete("/:id", async (req, res, next) =>
    await new DosenHapus().exec(req, res, next))


module.exports = router    