const mongoose = require('mongoose');
require('dotenv').config();

bd = process.env.DB_CNN || 'mongodb+srv://felipe:admin@ingweb.4nf35ju.mongodb.net/test'

const dbConnection =async()=>{
    
    try{
        await mongoose.connect(bd);
        console.log('DB online')
    }catch(err){
        console.log(err);
        throw new Error('Error a la hora de conectar la base de datos')
    }

};


module.exports={
    dbConnection
}