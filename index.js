import fs from 'fs';
import chalk from 'chalk';

function handleError(error) {
    throw new Error(chalk.red(error.code, 'The file was not found in that directory'));
}

async function getFile(pathFile) {
    const encoding = 'utf-8';
    const text = await fs.promises.readFile(pathFile, encoding);
    console.log(chalk.green(text));
}

// promises with then

// function getFile(pathFile) {
//     const encoding = 'utf-8';
//     fs.promises.readFile(pathFile, encoding)
//         .then((text => console.log(chalk.green(text))))
//         .catch((error) => handleError(error));
// }


getFile('./files/text.md');