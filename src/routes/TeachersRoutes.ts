import { Router, response } from 'express';
import { teacherController } from '../controllers/TeacherController';
const route = Router();

const teacherRouter = (app: Router) => {
    app.use('/teachers', route);

    route.get('', teacherController.getAll)
    route.post('', teacherController.createTeacher);
    route.get('/:id', teacherController.find);
    route.put('/:id', teacherController.updateTeacher);

    return app;
}

export default teacherRouter;