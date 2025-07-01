"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    /**
     * this is create the student
     */
    async create(req, res) {
        try {
            console.log("Inside controller.create()");
            console.log("Received body:", req.body);
            const request = req.body;
            const student = await this.studentService.createStudent(request);
            res.status(200).json(student);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'Unexpected error' });
            }
        }
    }
    /**
     * student update
     */
    async update(req, res) {
        try {
            console.log('check update ');
            const id = req.params.id;
            const request = req.body;
            const update = await this.studentService.updateStuden(id, request);
            res.status(200).json({ update });
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(404).json({ error: error.message });
            }
            else {
                res.status(404).json({ error: 'Something unexpected.' });
            }
        }
    }
    /**
     * student delete
     */
    async delete(req, res) {
        try {
            let id = req.params.id;
            let deleted = await this.studentService.deletStudent(id);
            res.status(200).json({ deleted });
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(404).json({ error: error.message });
            }
            else {
                res.status(404).json({ error: 'Something unexpected.' });
            }
        }
    }
    /**
     * get specific student
     */
    async getStudent(req, res) {
        try {
            console.log('check get student');
            let id = req.params.id;
            let student = await this.studentService.getStudent(id);
            res.status(200).json({ student });
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(404).json({ error: error.message });
            }
            else {
                res.status(404).json({ error: 'Something unexpected.' });
            }
        }
    }
    /**
     * get all students
     */
    async getAllStudent(req, res) {
        try {
            console.log('check all students');
            let students = await this.studentService.geAllStudent();
            res.status(200).json(students);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(404).json({ error: error.message });
            }
            else {
                res.status(404).json({ error: 'Something unexpected.' });
            }
        }
    }
}
exports.StudentController = StudentController;
