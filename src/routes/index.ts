import { Router } from "express";
import teacherRouter from "./TeachersRoutes";

const router = () => {
    const apiRoutes = Router();
    // Apply model Routes to the app
    teacherRouter(apiRoutes);

    return apiRoutes;
}

export default router;