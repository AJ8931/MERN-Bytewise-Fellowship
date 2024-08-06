import express from "express";
import {
  AddBook,
  DeleteBook,
  GetBooks,
  getDataByID,
  UpdateBook,
} from "../controllers/userControllers.js";

export const bookRoutes = express.Router();
bookRoutes.route("/").get(GetBooks).post(AddBook);

bookRoutes.route("/:id").get(getDataByID).delete(DeleteBook).patch(UpdateBook);
