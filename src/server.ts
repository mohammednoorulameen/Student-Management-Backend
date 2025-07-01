
import { app } from './app'
import { connectDB } from './db'

const PORT = 3000

async function startServer() {
    await connectDB();
    app.listen(PORT,()=>{
        console.log(`Server started running http://localhost:${PORT}`);
    })
}

startServer()