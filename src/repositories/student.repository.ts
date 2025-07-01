import { error } from "console";
import {
  IStudentDocument,
  StudentModel,
  IStudentData,
} from "../models/student.model";
import IRepository from "../repositories/repository.interface";

class StudentRepository implements IRepository<IStudentDocument> {
  constructor() {}

  /**
   * student create queries
   */

  async create(item: IStudentData): Promise<IStudentDocument> {
    const student = new StudentModel(item);
    return await student.save();
  }

  /**
   * student Update queries
   */

  async update(
    id: string,
    data: Partial<IStudentData>
  ): Promise<IStudentDocument> {
    const student = await StudentModel.findByIdAndUpdate(id, data, {
        new:true
    }).exec();
    if(!student) throw new Error('Student not fount!');
    return student;
  }

  /**
   * student delete queries
   */

  async delete(id : string): Promise <boolean> {
    const result = await StudentModel.findByIdAndDelete(id).exec()
    return !!result;
  }

  /**
   * find specific student
   */

  async findOne(id: string): Promise <IStudentDocument> {
    const student = await StudentModel.findById(id).exec();
    if(!student) throw new Error("student not found!");
    return student
  }


/**
 * find all student 
 */

async findAll(): Promise <IStudentDocument[]> {
    return await StudentModel.find({}).exec()
}

}

export { StudentRepository };
