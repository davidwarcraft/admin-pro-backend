const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async() =>{

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
            });

            console.log('Db online')
    
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos')
    }

}

module.exports= {
    dbConnection
}