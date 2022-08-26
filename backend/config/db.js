import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://username:RAJH@rajh.cjtpg4k.mongodb.net/RAJHFrames',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    )


    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
