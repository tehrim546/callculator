import * as inquire from "inquirer";
import chalk from "chalk";
// calculator operators;
var operators;
(function (operators) {
    operators["ADD"] = "Addition";
    operators["SUBTRACT"] = "Subtraction";
    operators["MULTIPLY"] = "Multiply";
    operators["DIVISION"] = "Division";
})(operators || (operators = {}));
const prompt = inquire.createPromptModule();
function validateNumber(input) {
    if (isNaN(parseFloat(input))) {
        return "please enter a valid number";
    }
    return true;
}
async function main() {
    const input = await prompt([
        {
            type: "input",
            name: "num1",
            message: "please enter the first number",
            validate: validateNumber,
        },
        {
            type: "rawlist",
            name: "operator",
            message: "select an operator:",
            choices: Object.values(operators)
        },
        {
            type: "input",
            name: "num2",
            message: "please enter the second number:",
            validate: validateNumber,
        }
    ]);
    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    let result;
    const selectedOperator = input.operator;
    if (selectedOperator === operators.ADD) {
        result = num1 + num2;
        console.log(chalk.green.bgRedBright(`Result is:${result}`));
    }
    else if (selectedOperator === operators.DIVIDE) {
        result = num1 / num2;
        console.log(chalk.yellow.bgBlack(`Result is : ${result}`));
    }
    else if (selectedOperator === operators.MULTIPLY) {
        result = num1 / num2;
        console.log(chalk.blue.bgYellow(`Result is : ${result}`));
    }
}
main();
