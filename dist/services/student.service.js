"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const student_model_1 = require("../models/student.model");
class StudentService {
    constructor(repository) {
        this.repository = repository;
    }
    /**
     * create student logics
     */
    async createStudent(req) {
        const studentEntity = new student_model_1.Student(req.name, req.grade);
        const student = await this.repository.create({
            name: studentEntity.getName(),
            grade: studentEntity.getGrade(),
        });
        return this.mapToResponse(student);
    }
    /**
     * student update logic
     */
    async updateStuden(id, request) {
        const update = await this.repository.update(id, request);
        return this.mapToResponse(update);
    }
    /**
     * delete student
     */
    async deletStudent(id) {
        return this.repository.delete(id);
    }
    /**
     * find specific student logic
     */
    async getStudent(id) {
        const student = await this.repository.findOne(id);
        return this.mapToResponse(student);
    }
    /**
     * find all students
     */
    async geAllStudent() {
        const AllStudent = await this.repository.findAll();
        return AllStudent.map((student) => this.mapToResponse(student));
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
