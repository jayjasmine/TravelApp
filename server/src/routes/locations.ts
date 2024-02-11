import express from 'express';
import { addLocation, getLocations } from '../controllers/locationsController';

const router = express.Router();

router.post('/locations', addLocation);
router.get('/locations', getLocations);

export default router;