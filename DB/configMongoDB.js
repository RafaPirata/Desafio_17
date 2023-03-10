const mongoose = require('mongoose')
const logger = require('../utils/winston.js')
mongoose.use(mongoose.set('strictQuery', false));
// -------- Conecta a la base de datos MONGO ----------

const dbConnection = async () => {
    try {
        const URL = process.env.MONGO_URL_CONNECT
        mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        logger.info('Connected to MongoDB Server <-123->')
       
    } catch (error) {
       logger.error('Error connection to DB: '+error)
    }
}

module.exports = { dbConnection }
