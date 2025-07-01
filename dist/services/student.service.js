"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const student_model_1 = require("../models/student.model");
class StudentService {
    constructor(repository) {
        this.repository = repository;
    }
    async createStudent(req) {
        const studentEntity = new student_model_1.Student(req.name, req.grade);
        const student = await this.repository.create({
            name: studentEntity.getName(),
            grade: studentEntity.getGrade(),
        });
        return this.mapToResponse(student);
    }
    mapToResponse(student) {
        return {
            id: student._id.toString(),
            name: student.name,
            grade: student.grade,
            details: student.getDetails()
        };
    }
}
exports.StudentService = StudentService;
