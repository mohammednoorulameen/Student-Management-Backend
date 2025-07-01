import { CreateStudentRequest } from "../models/request.model";
import { StudentService } from "../services/student.service";
import { Request, Response } from 'express'
import { UpdateStudentRequest } from '../models/request.model'



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
 * student update 
 */

 async update(req:Request, res:Response){
    try {
        console.log('check update ')
        const id = req.params.id;
        const request : UpdateStudentRequest = req.body;
        const update = await this.studentService.updateStuden(id, request);
        res.status(200).json({update})

    } catch (error) {
        if(error instanceof Error){
             res.status(404).json({ error: error.message });
        }else{
            res.status(404).json({ error: 'Something unexpected.' });
        }
    }
 }

 /**
  * student delete 
  */

 async delete(req:Request, res:Response){
    try {
        let id = req.params.id;
        let deleted = await this.studentService.deletStudent(id)
        res.status(200).json({deleted})
    } catch (error) {
         if(error instanceof Error){
             res.status(404).json({ error: error.message });
        }else{
            res.status(404).json({ error: 'Something unexpected.' });
        }
    }
 }


 /**
  * get specific student 
  */

async getStudent(req: Request, res: Response){
    try {
        console.log('check get student')
        let id = req.params.id;
        let student = await this.studentService.getStudent(id);
        res.status(200).json({student})
    } catch (error) {
         if(error instanceof Error){
             res.status(404).json({ error: error.message });
        }else{
            res.status(404).json({ error: 'Something unexpected.' });
        }
    }
}

/**
 * get all students
 */

async getAllStudent(req: Request, res: Response){
    try {
        console.log('check all students')
        let students = await this.studentService.geAllStudent()
        res.status(200).json(students)
    } catch (error) {
          if(error instanceof Error){
             res.status(404).json({ error: error.message });
        }else{
            res.status(404).json({ error: 'Something unexpected.' });
        }
    }
}

}

export { StudentController }