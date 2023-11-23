import express from "express";

import { getAllUsers } from "../controllers/users";
import { isAuthentication } from "../middleware";

export default (router: express.Router) => {
  router.get("/users", isAuthentication, getAllUsers);
};
