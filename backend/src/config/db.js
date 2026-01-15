const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB đã thông suốt!");
    } catch (err) {
        console.error("❌ Lỗi kết nối:", err.message);
        process.exit(1);
    }
};
module.exports = connectDB;