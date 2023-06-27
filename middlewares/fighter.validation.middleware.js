import { FIGHTER } from "../models/fighter.js";

const createFighterValid = (req, res, next) => {
  const { body } = req;
  const { id, ...data } = body;

  if (id && Object.keys(data).length !== Object.keys(fighterModel).length) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (data.power && (data.power < 1 || data.power > 100)) {
    return res.status(400).json({ error: 'Power should be between 1 and 100' });
  }
  if (data.defense && (data.defense < 1 || data.defense > 10)) {
    return res.status(400).json({ error: 'Defense should be between 1 and 10' });
  }
  if (data.health && (data.health < 80 || data.health > 120)) {
    return res.status(400).json({ error: 'Health should be between 80 and 120' });
  }
  next();
};

const updateFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during update
  next();
};

export { createFighterValid, updateFighterValid };
