import { USER } from "../models/user.js";

const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for USER entity during creation
  const { body } = req;
  const { id, ...data } = body;


  if (!id && Object.keys(data).length !== Object.keys(userModel).length) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (data.email && !data.email.endsWith('@gmail.com')) {
    return res.status(400).json({ error: 'Email should be from @gmail domain' });
  }
  if (data.phoneNumber && !data.phoneNumber.match(/^\+\d{10}$/)) {
    return res.status(400).json({ error: 'Phone number should be in format +xxxxxxxxx' });
  }
  if (data.password && data.password.length < 3) {
    return res.status(400).json({ error: 'Password should be at least 3 characters long' });
  }

  next();
};

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update

  next();
};

export { createUserValid, updateUserValid };
