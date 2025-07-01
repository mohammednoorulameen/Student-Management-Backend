import { CreateStudentRequest } from "../models/request.model";
import { StudentService } from "../services/student.service";
import { Request, Response } from 'express'



class StudentController {
constructor(private studentService : StudentService) {}


/**
 * this is create the student 
 */

async create(req: Request, res : Response){
    try {

         console.log("Inside controller.create()");
        console.log("Received body:", req.body); 

        const request :  CreateStudentRequest  = req.body;
        const student = await this.studentService.createStudent(request);
        res.status(200).json(student);
    } catch (error) {
        if(error instanceof Error){
            res.status(500).json({ error: error.message});
        }else{
            res.status(500).json({ error: 'Unexpected error' });
        }
    }
}


/**
 * 
 */


}

export { StudentController }