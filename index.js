import fs from 'fs';
import chalk from 'chalk';

function handleError(error) {
    throw new Error(chalk.red(error.code, 'The file was not found in that directory'));
}

// promises with then

function getFile(pathFile) {
    const encoding = 'utf-8';
    fs.promises.readFile(pathFile, encoding)
        .then((text => console.log(chalk.green(text))))
        .catch((error) => handleError(error));
}

// function getFile(pathFile) {
//     const encoding = 'utf-8';
//     fs.readFile(pathFile, encoding, (error, text) => {
//         if (error) {
//             handleError(error);
//         }
//         console.log(chalk.green(text));
//     });
// }

getFile('./files/text.md');