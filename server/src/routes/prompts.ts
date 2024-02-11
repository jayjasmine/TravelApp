import express from 'express';
import { getCulturalInsights, getEateryInsights } from '../controllers/promptController';

const router = express.Router();

router.post('/', getCulturalInsights);
router.post('/eatery', getEateryInsights);

export default router;