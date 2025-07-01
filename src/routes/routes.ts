import { Router } from 'express'
import { StudentRepository } from '../repositories/student.repository'
import { StudentService } from '../services/student.service';
import { StudentController } from '../controllers/student.controller';

let router = Router();

let repository = new StudentRepository();
let service = new StudentService(repository);
let controller = new StudentController(service);

router.post('/', (req, res)=> controller.create(req, res));
router.put('/:id', (req, res)=> controller.update(req, res));
router.delete('/:id', (req, res)=> controller.delete(req, res));
router.get('/:id', (req, res)=> controller.getStudent(req, res));
router.get('/', (req, res)=> controller.getAllStudent(req, res))




export { router as StudentRouter }

