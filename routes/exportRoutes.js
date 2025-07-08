import express from 'express';
import { exportUsersCSV, exportUsersPDF } from '../controllers/exportController.js';

const router = express.Router();

router.get("/csv", exportUsersCSV);
router.get("/pdf", exportUsersPDF); 

export default router;