import * as fs from 'fs/promises';


await fs.writeFile('test.txt', 'Садок вишневий коло хати');
await fs.appendFile('test.txt', '\nХрущі над вишнями гудуть');
const data = await fs.readFile('test.txt', 'utf8');

  
console.log(data)



/* fs.writeFile('test.txt', 'Садок вишневий коло хати', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');

  fs.appendFile('test.txt', '\nХрущі над вишнями гудуть', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');

    fs.readFile('test.txt', 'utf8', (err, data) => { 
      if (err) throw err;
      console.log(data);
    });

  });

}); */
