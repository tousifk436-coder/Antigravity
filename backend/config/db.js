const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://tousifk436_db_user:Tousif123@cluster.414fpqv.mongodb.net/anti')
    console.log("MongoDb connected")
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB