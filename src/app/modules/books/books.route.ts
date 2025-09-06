import { Router } from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getSingleBook,
  countBooks,
  updateBook,
} from "./books.controller";

const booksRouter = Router();

booksRouter.post("/", createBook);
booksRouter.get("/count", countBooks);
booksRouter.get("/", getAllBooks);
booksRouter.get("/:bookId", getSingleBook);
booksRouter.put("/:bookId", updateBook);
booksRouter.delete("/:bookId", deleteBook);

export default booksRouter;
