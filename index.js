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
    let filedata = fs.readFileSync(`${options.input}`, { encoding: 'utf8', flag: 'r' });
    let jsondata = JSON.parse(filedata);
        let data = "";
        if (Array.isArray(jsondata) === true) {
            for (let i of jsondata) {
            data = data + i.exchangedate + ":" + i.rate + "\n";
            }
        }
        else {
        data = data + jsondata.exchangedate + ":" + jsondata.rate;
        }
        if (options.display != undefined) {
        console.log(data);
        }
        if (options.output != undefined) {
        fs.writeFileSync(`${options.output}`, data);
        console.log(`result was saved in ${options.output}`);
        }
    }