import mongoose from "mongoose";
import jwt from "jsonwebtoken";



const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
})

userSchema.method.generateToken = async function () {
    try {
       return jwt.sign({
        userId : this._id.toString(),
        email:this.email,
       },
       process.env.JWT_SECREAT_KEY,
       {expiresIn:'1d'})
        
    } catch (error) {
        console.log(error);
    }
}

const User = mongoose.model('User',userSchema)

export default User