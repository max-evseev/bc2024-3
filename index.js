const { program } = require('commander');
const fs = require('fs');
program
.option('-i, --input <path>')
.option('-o, --output <path>')
.option('-d, --display');
program.parse();
const options = program.opts();
    if (options.input === undefined) {
    console.log(`please specify input file`);
    return;
    }
    else {
        fs.readFile(`${options.input}`, 'utf8', (err, data) => {
            if (err) {
            console.log('such file does not exist');
            return;
            }
            if (options.display != undefined) {
            console.log(data);
            }
            if (options.output != undefined) {
                fs.writeFile(`${options.output}`, data, err => {
                    if (err) {
                    console.log('could not save it into file, sorry');
                    }
                    else {
                    console.log(`result was saved in ${options.output}`);
                    }
                });
            }
        });
    }