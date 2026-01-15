const Program = require('../models/Program');

// Hàm lấy danh sách chương trình
exports.getAllPrograms = async (req, res) => {
    try {
        const programs = await Program.find();
        res.json(programs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Hàm thêm chương trình mới
exports.createProgram = async (req, res) => {
    const program = new Program(req.body);
    try {
        const newProgram = await program.save();
        res.status(201).json(newProgram);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};