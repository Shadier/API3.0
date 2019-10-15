import { Router, response } from 'express';
import { sponsorController } from '../controllers/sponsorController';
const route = Router();

const sponsorRouter = (app: Router) => {
    app.use('/sponsors', route);

    route.get('', sponsorController.getAll)
    route.post('', sponsorController.createSponsor);
    route.get('/:id', sponsorController.find);
    route.get('/filter/:search', sponsorController.findByName);
    route.put('/:id', sponsorController.updateSponsor);

    return app;
}

export default sponsorRouter;