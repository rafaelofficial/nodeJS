import chalk from "chalk";
import getFile from "./index.js";

const path = process.argv;

async function textProcess(path) {
  const result = await getFile(path[2]);
  console.log(chalk.yellow('Link list: '), result);
}

textProcess(path);
