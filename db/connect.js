import mongoose from 'mongoose'

// mongoose
//     .connect(process.env.DB)
//     .then(() => console.log('connected to the database....'))
//     .catch((err) => console.log(err))

const connectDB = (url) => {
    return mongoose.connect(url)
}

export default connectDB