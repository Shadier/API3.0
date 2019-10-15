import { Router } from 'express';
import { staffController } from '../controllers/StaffController';
const route = Router();

const staffRouter = (app: Router) => {
    app.use('/staff', route);

    route.get('', staffController.getAll)
    route.post('', staffController.createStaff);
    route.get('/:id', staffController.find);
    route.get('/filter/:search', staffController.findByName);
    route.put('/:id', staffController.updateStaff);

    return app;
}

export default staffRouter;