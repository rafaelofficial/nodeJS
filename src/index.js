import fs from 'fs';
import chalk from 'chalk';

function extractLinks(text) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const catched = [...text.matchAll(regex)];
    return catched.map(catched => ({[catched[1]]: [catched[2]]}));
}

function handleError(error) {
    throw new Error(chalk.red(error.code, 'The file was not found in that directory'));
}

async function getFile(pathFile) {
    try {
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(pathFile, encoding);
        const result = extractLinks(chalk.green(text));
        return result.length !== 0 ? result : 'Link no exist in the file';
    } catch (error) {
        handleError(error);
    }
}

export default getFile;
