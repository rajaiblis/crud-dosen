// ============== nama field dan type datanya =============
// nomatkul:   Number,
// namamatkul: String,
// dosen:      String,
// semester:   String 
//                     Beberapa fungsi
//    {buat, semua, dapatkan semua/semua, detail, ubah, hapus} 
// ========================================================

const Matkul = require('../../models/matkul');

const buat = async(req) => {
    let { nomatkul, namamatkul, dosen, semester } = req.body
    nomatkul = parseInt(nomatkul)

    let masukann_data = {
        nomatkul, namamatkul, dosen, semester
    }

    let data = new Matkul(masukann_data)

    try {
        await data.save()
        
        return data
    } catch(err){
        throw err
    }
} 

const semua = async () => {
    try {
        let query = await Matkul.find({}).exec()
        let data  = query.map((v, i) => {
            return {
                nomatkul:   v.nomatkul,
                namamatkul: v.namamatkul,
                dosen:      v.dosen,
                semester:   v.semester
            }
        })
        
        return data 
    } catch(err) {
        throw err
    }    
}

module.exports = {
    buat,
    semua
}