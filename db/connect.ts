import mongoose from "mongoose";
import UserModel from "../models/user"


async function connectdb() {
    if(!process.env.MONGODB_URL){
        throw new Error("Falta la variable de entorno MONGODB_URL")
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Conexion exitosa con Mongo DB")
 /*       const newUser = new UserModel({
            firstname: "Lorena",
            lastname: "Cardenas",
            email:"lorena.cardenas.soliz@gmail.com",
            login_code: "1234",
            roles: {
                admin: true,
                seller: true,
            }
        })
        console.log({newUser})
        await newUser.save() */
    } catch(error){
        console.log("Error al conectar a la BBDD", error)
    }
}

export default connectdb