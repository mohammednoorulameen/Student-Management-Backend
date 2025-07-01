"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRepository = void 0;
const student_model_1 = require("../models/student.model");
class StudentRepository {
    constructor() { }
    /**
     * student create queries
     */
    async create(item) {
        const student = new student_model_1.StudentModel(item);
        return await student.save();
    }
    /**
     * student Update queries
     */
    async update(id, data) {
        const student = await student_model_1.StudentModel.findByIdAndUpdate(id, data, {
            new: true
        }).exec();
        if (!student)
            throw new Error('Student not fount!');
        return student;
    }
    /**
     * student delete queries
     */
    async delete(id) {
        const result = await student_model_1.StudentModel.findByIdAndDelete(id).exec();
        return !!result;
    }
    /**
     * find specific student
     */
    async findOne(id) {
        const student = await student_model_1.StudentModel.findById(id).exec();
        if (!student)
            throw new Error("student not found!");
        return student;
    }
    /**
     * find all student
     */
    async findAll() {
        return await student_model_1.StudentModel.find({}).exec();
    }
}
exports.StudentRepository = StudentRepository;
