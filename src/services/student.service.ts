import { IStudentDocument, Student } from "../models/student.model";
import { CreateStudentRequest, UpdateStudentRequest } from '../models/request.model'
import { injectable } from 'tsyringe';
import IRepository from "../repositories/repository.interface";
import { StudentResponse } from "../models/response.model";


class StudentService {
    constructor(private repository: IRepository<IStudentDocument>) {}

    /**
     * create student logics
     */

    async createStudent (req: CreateStudentRequest): Promise <StudentResponse> {
        const studentEntity = new Student(req.name,req.grade);
        const student = await this.repository.create({
            name : studentEntity.getName(),
            grade : studentEntity.getGrade(), 

        })
        return this.mapToResponse(student)
    }

    /**
     * student update logic
     */

    async updateStuden(
        id:string,
        request: UpdateStudentRequest,
     ): Promise <StudentResponse> {
        const update = await this.repository.update(id, request)
        return this.mapToResponse(update);
     }
    
     /**
      * delete student
      */

     async deletStudent(id: string): Promise<boolean> {
        return this.repository.delete(id);
     }

     /**
      * find specific student logic
      */

     async getStudent(id: string): Promise <StudentResponse> {
        const student = await this.repository.findOne(id)
        return this.mapToResponse(student)
     }

     /**
      * find all students
      */

     async geAllStudent(): Promise <StudentResponse[]>{
        const AllStudent = await this.repository.findAll();
        return AllStudent.map((student)=> this.mapToResponse(student))
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

