import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";

const router = Router();

// TODO: Implement route controllers for fighter
router.get("/",
  (req, res, next) => {
    try {
      const data = fighterService.getFighters();
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
      const data = fighterService.getFighter((fighter) => fighter.id === id);
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
    if (!res.err) {
      try {
        const data = userService.createUser(req.body);
        res.data = data;
      } catch (err) {
        res.err = err;
        console.log("We couldn't create the user");
      }
    }
    next();
  },
  responseMiddleware
);

router.put("/:id",
  /* updateUserValid, */
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
