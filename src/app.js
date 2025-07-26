const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes/route");
const config = require("./config/dbConfig");
const cors = require("cors");
const sanitizeBody = require('./middlewares/xssSanitizer');

dotenv.config();
if (!process.env.JWT_SECRET) {
    console.warn("JWT_SECRET is not defined in your .env file!");
}

class App {
    constructor() {
        this.app = express();
        this.setMiddleware();
        this.setRoutes();
        this.connectToDatabase();
    }

    setMiddleware() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(sanitizeBody);
    }

    setRoutes() {
        this.app.use("/api/v1", routes);
    }

    async connectToDatabase() {
        try {
            await config.authenticate();
            console.log("Database connected successfully!");
        } catch (error) {
            console.error("Unable to connect to the database:", error.message);
        }
    }

    // start the server
    start() {
        const PORT = process.env.APP_PORT || 3001;
        this.app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    }
}

module.exports = App;