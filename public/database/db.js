import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const DBConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser : true,
        })
        console.log('DB connection successful')
    } catch(error) {
        console.log(`Error in connecting to DB. Error => ${error}`)
    }
}
 
export default DBConnection