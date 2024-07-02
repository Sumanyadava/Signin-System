import mongoose from 'mongoose'
import  dotenv  from 'dotenv';

dotenv.config()
//change db name accordingly
const db_name = "/signin"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI + db_name)
          console.log('MongoDB connected')

    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
export default connectDB;