import { Request, Response } from 'express';
import * as universityService from '../services/university.services';

interface FindParams {
  name: string;
}

interface AddParams {
  name: string;
  location: string;
  address: string;
}

const findUniversity = async (
  req: Request<unknown, unknown, FindParams>,
  res: Response
) => {
  const { name } = req.body;
  const university = await universityService.findUniversity(name);
  res.json(university);
};

const addUniversity = async (
  req: Request<unknown, unknown, AddParams>,
  res: Response
) => {
  const { name, location, address } = req.body;
  const university = await universityService.addUniversity(
    name,
    location,
    address
  );
  res.json(university);
};

export default {
  findUniversity,
  addUniversity,
};
