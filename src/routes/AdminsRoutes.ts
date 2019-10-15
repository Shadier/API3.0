import { Router, response } from 'express';
import { adminController } from '../controllers/AdminController';
const route = Router();

const adminRouter = (app: Router) => {
    app.use('/admins', route);

    route.get('', adminController.getAll)
    route.post('', adminController.createAdmin);
    route.get('/:id', adminController.find);
    route.get('/filter/:search', adminController.findByName);
    route.put('/:id', adminController.updateAdmin);

    return app;
}

export default adminRouter;