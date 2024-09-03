const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question('Digite uma string: ', input=>{
    let inverso = '';

    for(a = input.length - 1; a-- ;a>=0){
        inverso = inverso.concat(input[a]);
    }
    console.log(inverso);
    process.exit();
});