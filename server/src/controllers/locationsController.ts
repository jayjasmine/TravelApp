import { Request, Response } from "express";
import Location from '../models/locations';
import { getAddressIcon } from "../services/openaiService";

export const addLocation = async (req: Request, res: Response) => {
  
  try {
    const { address, label } = req.body;
    
    const location = new Location({ address, label });

    await location.save();
    // console.log('saved location: ' + location)
    //Generate the icon for the address
    try {
      const iconUrl = await getAddressIcon(address);
      console.log('iconUrl: ' + iconUrl);
      location.iconUrl = iconUrl as string;
      location.save();
    } catch (error) {
      console.error(error);  // Log the error
      res.status(500).json({ message: 'Error adding location' + error.message });
    }
    res.status(201).json({ location });
  } catch (error) {
    res.status(500).json({ message: 'Error adding location' + error.message });
  }
};

export const getLocations = async (req: Request, res: Response) => {
  try {
    const locations = await Location.find();
    res.status(200).json({ locations });
  } catch (error) {
    res.status(404).json({ message: 'Locations not found' });
  }
}