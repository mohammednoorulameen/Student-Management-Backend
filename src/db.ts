import mongoose from 'mongoose'

async function connectDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/student-management')
        console.log('Database successfully connected. ')
    } catch (error) {
        console.log('database connection failed', error );
        process.exit(1)
    }
}

export { connectDB }


