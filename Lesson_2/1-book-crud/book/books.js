import * as fs from 'fs/promises';
import { nanoid } from 'nanoid'

export const getBooks = async () => {
  const booksJson = await fs.readFile('books.json', 'utf-8');
  return JSON.parse(booksJson);
}

export const addBook = async (book) => {
  const books = await getBooks();
  books.push(book);
  await fs.writeFile('books.json', JSON.stringify(books));
  return book;
}

export const updateBook = async (id, book) => {
  const books = await getBooks();
  const index = books.findIndex(book => book.id === id);
  books[index] = book;
  await fs.writeFile('books.json', JSON.stringify(books));
  return book;
}

export const deleteBook = async (id) => {
  const books = await getBooks();
  const index = books.findIndex(book => book.id === id);
  books.splice(index, 1);
  await fs.writeFile('books.json', JSON.stringify(books));
  return true;
}

export const getBookById = async (id) => {
  const books = await getBooks();
  return books.find(book => book.id === id);
}

