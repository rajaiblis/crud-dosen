const Matkul = require('../../models/matkul');
const dosen = require('../../models/dosen'); //import

const buat = async(req) => {
    let { nomatkul, namamatkul, dosen, semester } = req.body


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
        let query = await Matkul.find({}).populate([
           {
            path : 'dosen', 
            model : dosen
           } 
        ]).exec()
        
        return query 
    } catch(err){
        throw err        
    }
}

const update = async (id, updated_data) => {
    let { nomatkul,namamatkul,dosen,tlp,semester  } = updated_data
    
    let data = {
        nomatkul,namamatkul,dosen,tlp,semester
    }      
    

    try{
        let query = await Mahasiswa.findOneAndUpdate({
            _id: id
        }, data).exec()

        return query
    }catch(err){
        throw err
    }
}



module.exports = {
    buat,
    semua,
    update
}