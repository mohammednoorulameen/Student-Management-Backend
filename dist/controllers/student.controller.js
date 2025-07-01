"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
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
}
exports.StudentController = StudentController;
