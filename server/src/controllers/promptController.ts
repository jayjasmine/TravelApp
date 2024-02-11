import { Request, Response } from 'express';
import { getInsights, getEateryResponse } from '../services/openaiService';


export const getCulturalInsights = async (req: Request, res: Response) => {
  const { location, userType } = req.body;
  if(!location) {
    return res.status(400).json({ error: 'Missing location' });
  }

  try {
    const insights = await getInsights(location, userType);
    res.json({ insights });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }

}

export const getEateryInsights = async (req: Request, res: Response) => {
  const { location } = req.body;
  if(!location) {
    return res.status(400).json({ error: 'Missing location' });
  }

  try {
    const insights = await getEateryResponse(location);
    res.json({ insights });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}