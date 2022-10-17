import fs from 'fs';
import chalk from 'chalk';

const textTest = 'Are generated received go to of a object [fileList](https://developer.mozialla.org/pt-BR/docs/Web/API/FileList) which is returned as selection result, by user, of files often of elements [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), to go of object [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API';

function extractLinks(text) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const catched = regex.exec(text);
    console.log(catched);
}

extractLinks(textTest);

function handleError(error) {
    throw new Error(chalk.red(error.code, 'The file was not found in that directory'));
}

async function getFile(pathFile) {
    try {
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(pathFile, encoding);
        console.log(chalk.green(text));
    } catch (error) {
        handleError(error);
    }
}

// getFile('./files/text.md');
