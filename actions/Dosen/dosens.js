// buat, semua, detail, ubah, hapus
// nik, nama, email, tlp, matkul

const Dosen = require("../../models/dosen");
const matkul = require("../../models/matkul");

const buat = async(req) => {
    let { nik, nama, email, tlp, matkul, id_matkul } = req.body
    // tlp = parseInt(tlp)
    
    var insert_data = {
        nik, nama, email, tlp, matkul, id_matkul
    }

    let data = new Dosen(insert_data)

    try {
        await data.save()
  
        return data
    } catch(err){   
        throw err
    }
}

const semua = async () => {
    try {
        let query = await Dosen.find({}).populate([
           {
            path : 'id_matkul', 
            model : matkul
           } 
        ]).exec()
        
        return query 
    } catch(err){
        throw err        
    }
}

const detail = async (id) => {
    try{
        let query = await Dosen.findOne({
            _id: id
        }).exec()

        return query
    } catch(err){
        throw err
    }
}

const ubah = async (id, update_data) => {
    let { nik,nama, email, tlp, matkul } = update_data

    let data = {
        nik, nama, email, tlp, matkul
    }

    try {
        let query = await Dosen.findOneAndUpdate({
            _id: id            
        }, data).exec()

        return query
    } catch(err){
        throw err
    }
};

const hapus = async (id) => {
    try {
        let query = await Dosen.findOneAndDelete({
            _id: id
        }).exec()

        return query
    } catch(err){
        throw err
    }
}

module.exports = {
    buat,
    detail,
    semua,
    ubah,
    hapus
}