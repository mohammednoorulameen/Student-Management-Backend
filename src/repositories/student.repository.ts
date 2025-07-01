import { IStudentDocument, StudentModel, IStudentData,  } from '../models/student.model'
import IRepository from '../repositories/repository.interface'

class StudentRepository implements IRepository<IStudentDocument>{
    constructor() {}

    async create(item: IStudentData): Promise<IStudentDocument> {
        const student = new StudentModel(item);
        return await student.save()
    }
}

export {StudentRepository}