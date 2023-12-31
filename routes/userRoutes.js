import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

// TODO: Implement route controllers for user
router.get("/",
  (req, res, next) => {
    try {
      const data = userService.getUsers();
      res.data = data;
    } catch (err) {
      res.err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

router.get("/:id",
  (req, res, next) => {
    try {
      const { id } = req.params;
      const data = userService.search((user) => user.id === id);
      res.data = data;
    } catch (err) {
      res.err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

router.post("/",
  /* createUserValid, */
  (req, res, next) => {
   
    try {
      const { error, message } = req.body;
      if (error) {
          throw new Error(message);
      }

      const users = userService.createUser(req.body);
      req.body = {
          users,
      };
      return req.body;
      
  } catch ({ message }) {
      return (req.body = {
          error: true,
          message,
      });
  } finally {
      next();
  }
  },
  /* responseMiddleware */
);

router.put("/:id",
  updateUserValid,
  (req, res, next) => {
    if (!res.err) {
      try {
        const { id } = req.params;
        const data = userService.updateUser(id, req.body);
        res.data = data;
      } catch (err) {
        res.err = err;
      }
    }
    next();
  },
  responseMiddleware
);

router.delete("/:id",
  (req, res, next) => {
    try {
      const { id } = req.params;
      const data = userService.deleteUser(id);
      res.data = data;
    } catch (err) {
      res.err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

export { router };
