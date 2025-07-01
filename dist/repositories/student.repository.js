"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRepository = void 0;
const student_model_1 = require("../models/student.model");
class StudentRepository {
    constructor() { }
    async create(item) {
        const student = new student_model_1.StudentModel(item);
        return await student.save();
    }
}
exports.StudentRepository = StudentRepository;
