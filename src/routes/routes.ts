import { Router } from 'express'
import { StudentRepository } from '../repositories/student.repository'
import { StudentService } from '../services/student.service';
import { StudentController } from '../controllers/student.controller';

let router = Router();

let repository = new StudentRepository();
let service = new StudentService(repository);
let controller = new StudentController(service);

router.post('/', (req, res)=> controller.create(req, res));





export { router as StudentRouter }

