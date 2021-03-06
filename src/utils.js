
const logSymbols = require('log-symbols');
const chalk = require('chalk');

exports.info = (message) => {
    process.stdout.write(logSymbols.info + ' ' + chalk.blue(message) + '\n');
}

exports.success = (message) => {
    process.stdout.write(logSymbols.success + ' ' + chalk.green(message) + '\n\n');
}

exports.error = (message, code) => {
    process.stderr.write(logSymbols.error + ' ' + chalk.red(message) + '\n');
}