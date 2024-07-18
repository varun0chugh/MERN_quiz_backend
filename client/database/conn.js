import mongoose from "mongoose";
export default async function connect(){
    await mongoose.connect(process.env.ALTLAS_URI)
    console.log('database connected')
}