import { IStudentDocument, Student } from "../models/student.model";
import { CreateStudentRequest, UpdateStudentRequest } from '../models/request.model'
import { injectable } from 'tsyringe';
import IRepository from "../repositories/repository.interface";
import { StudentResponse } from "../models/response.model";


class StudentService {
    constructor(private repository: IRepository<IStudentDocument>) {}

    async createStudent (req: CreateStudentRequest): Promise <StudentResponse> {
        const studentEntity = new Student(req.name,req.grade);
        const student = await this.repository.create({
            name : studentEntity.getName(),
            grade : studentEntity.getGrade(), 

        })
        return this.mapToResponse(student)
    }



    private mapToResponse (student: IStudentDocument): StudentResponse {
        return {
            id : student._id.toString(),
            name : student.name,
            grade : student.grade,
            details : student.getDetails()
        }
    }
}

export { StudentService }

