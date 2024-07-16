#! /usr/bin/env node
//Importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";
//Printing a welcome message
console.log(chalk.cyanBright.bold("\n \t Welcome to Manaher's - WORD COUNTER"));
console.log("=".repeat(55));
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);
//Trimming the sentence and splitting it into words based on spaces
let words = answer.sentence.trim().split(" ");
//Analysis of user input sentence
console.log(chalk.greenBright.bold("\n \t - SENTENCE WORDS:"));
console.log(words);
console.log(chalk.greenBright.bold(`\n \t - WORD COUNT: ${chalk.magenta.bold(words.length)}`));
