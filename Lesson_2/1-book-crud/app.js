// console.log(process.argv)
import { getBooks, getBookById, addBook, updateBook, deleteBook } from "./book/books.js";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { nanoid } from 'nanoid'
import { program } from "commander";


async function invokeAction({ action, id, title, author }) {
  console.log("🚀 ~ file: app.js:7 ~ invokeAction ~ action, id, title, author", action, id, title, author)
  switch (action) {
    case "getBooks": {
      const books = await getBooks();
      console.log(books);
      break;
    }
    case "getBookById": {
      const book = await getBookById(id);
      console.log(book);
      break;
    }
    case "addBook": {
      const book = await addBook({ id: nanoid(), title, author });
      console.log(book);
      break;
    }
    case "updateBook": {
      const book = await updateBook(id, { id, title, author });
      console.log(book);
      break;
    }
    case "deleteBook": {
      const book = await deleteBook(id);
      console.log(book);
      break;
    }
  }
}

// process.argv
/* const argv = process.argv;
const action = argv[2].split("=")[1]; */

// yargs
/* const argvArr = hideBin(process.argv);
const args = yargs(argvArr).argv; */

// commander
program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-t, --title <type>")
  .option("-at, --author <type>");

program.parse();
const args = program.opts(process);

await invokeAction(args);

// node app.js -a getBooks -i id -t title