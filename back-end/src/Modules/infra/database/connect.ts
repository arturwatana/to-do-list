import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

export class MongoDB {
  async connect() {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@todolist.axbdnos.mongodb.net/?retryWrites=true&w=majority`,
      (err) => {
        if (err) {
          return console.log("Ocorreu um erro de conexão ao MongoDB");
        }
        return console.log("Conectado ao MongoDB");
      }
    );
  }
}
