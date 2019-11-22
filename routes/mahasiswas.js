const express   = require('express')
const router    = express.Router()
const CreateMhs = require("../actions/mahasiswa/create.action")
const ListMhs   = require("../actions/mahasiswa/list.action")
const Showmhs   = require("../actions/mahasiswa/show.action")
const Search    = require("../actions/mahasiswa/search.action")
const Update    = require("../actions/mahasiswa/update.action")
const Delete    = require("../actions/mahasiswa/delete.action")

router.post("/", async (req, res, next) =>
    await new CreateMhs().exec(req, res, next))

router.get("/list", async (req, res, next) =>
    await new ListMhs().exec(req, res, next))

router.get("/:id", async (req, res, next) =>
    await new Showmhs().exec(req, res, next))    
    
router.get("/", async (req, res, next) =>
    await new Search().exec(req, res, next))

router.put("/:id", async (req, res, next) =>
    await new Update().exec(req, res, next))    

router.delete("/:id", async (req, res, next) =>
    await new Delete().exec(req, res, next))    

module.exports = router    