import { Router } from "express";
import teacherRouter from "./TeachersRoutes";
import adminRouter from "./AdminsRoutes";

import sponsorRouter from "./SponsorsRoutes";
import staffRouter from "./StaffRoutes";

const router = () => {
    const apiRoutes = Router();
    // Apply model Routes to the app
    teacherRouter(apiRoutes);
    adminRouter(apiRoutes);
    sponsorRouter(apiRoutes);
    staffRouter(apiRoutes)

    return apiRoutes;
}

export default router;