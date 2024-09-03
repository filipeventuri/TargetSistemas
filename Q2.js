const readline = require('readline');

function test(x) {
    let a = Math.sqrt(x);
    return (Math.round(a) * Math.round(a) == x);
}

function fibonacci(x) {
    return (test(5 * x * x + 4) || test(5 * x * x - 4));
}


const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question('Digite o número para saber se pertence a sequencia de Fibonacci: ', input=>{
    const x = parseInt(input);

    if(!isNaN(x)){
        if(fibonacci(x) && x>=0){
            console.log("Pertence à sequência de Fibonacci");
        }else{
            console.log("Não pertence à sequência de Fibonacci");
        }
    }else{
        console.log("Entrada inválida!");
    }
    process.exit();
});




