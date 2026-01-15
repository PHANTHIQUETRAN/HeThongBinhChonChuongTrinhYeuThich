const mongoose = require('mongoose');

const ProgramSchema = new mongoose.Schema({
    // Đổi tên từ programId thành blockchainId
    blockchainId: { type: Number, required: true, unique: true }, 
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String }, // Đảm bảo có trường này để hiện ảnh
});

module.exports = mongoose.model('Program', ProgramSchema);