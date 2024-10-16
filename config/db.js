const mongoose = require("mongoose")
const PORT = process.env.PORT || '5000'

const Connect = async (app) => {
    try {
        // Attempt to connect to MongoDB
        await mongoose.connect(process.env.URI || "mongodb+srv://shadowshukla76:T2d7dxB68VqljHRX@cluster0.nuful.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

        console.log("MongoDB Connected");

        // Start the server once the DB connection is successful
        app.listen(PORT, () => {
            console.log(`Server Started at http://localhost:${PORT}/api/v1`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message || error);

        // Exit the process if the DB connection fails
        process.exit(1);
    }
};

// Export the Connect function

module.exports = Connect