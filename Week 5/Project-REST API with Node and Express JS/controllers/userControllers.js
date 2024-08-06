// import Data from "./Data.json" assert { type: "json" }; // Import JSON file
// import fs, { stat } from "fs";
import { promises as fs } from "fs";
import { v4 as uuidv4 } from "uuid";
import path from "path";

const __dirname = path.resolve();
const dataFilePath = path.join(__dirname, "/controllers/Data.json");

export const GetBooks = async (req, res) => {
  const data = await fs.readFile(dataFilePath, "utf8");
  const books = JSON.parse(data);
  res.send(books);
};

export const getDataByID = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(id);
  const data = await fs.readFile(dataFilePath, "utf8");
  const books = JSON.parse(data);
  res.send(books.find((book) => book.id === id));
};

export const AddBook = async (req, res) => {
  const Book = req.body;
  const newBook = { ...Book, id: uuidv4() };
  try {
    const data = await fs.readFile(dataFilePath, "utf8");
    const books = JSON.parse(data);
    books.push(newBook);

    await fs.writeFile(dataFilePath, JSON.stringify(books, null, 2));
    res.status(201).send("Book added successfully");
  } catch (err) {
    res.status(500).send("Error adding book details to data file");
  }
};

export const UpdateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, year, genre, summary } = req.body;
  console.log(req.body, id);
  try {
    const data = await fs.readFile(dataFilePath, "utf8");
    let books = JSON.parse(data);
    const book = books.find((book) => book.id === id);
    if (title) book.title = title;
    if (author) book.author = author;
    if (year) book.year = year;
    if (genre) book.genre = genre;
    if (summary) book.summary = summary;
    await fs.writeFile(dataFilePath, JSON.stringify(books, null, 2));
    res.send("Book details updated successfully");
  } catch (err) {
    res.status(500).send("Error updating book details");
  }
};

export const DeleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fs.readFile(dataFilePath, "utf8");
    let books = JSON.parse(data);
    books = books.filter((book) => book.id !== id);
    await fs.writeFile(dataFilePath, JSON.stringify(books, null, 2));
    res.send("Book deleted successfully");
  } catch (err) {
    res.status(500).send("Error deleting book");
  }
};
