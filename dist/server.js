"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const db_1 = require("./db");
const PORT = 3000;
async function startServer() {
    await (0, db_1.connectDB)();
    app_1.app.listen(PORT, () => {
        console.log(`Server started running http://localhost:${PORT}`);
    });
}
startServer();
