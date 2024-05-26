import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDB = async () => {
  try {
    console.log('Connecting to MONGODB...')
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    )
    console.log('\n MonogDB connected!')
    console.log(`\n DB Host : ${connectionInstance.connection.host}`)
  } catch (error) {
    console.log('MonogDB connection failed!', error)
    process.exit(1)
  }
}

export default connectDB
