const fs = require('fs');
const path = require('path');

function read(x) {
    
        const data = fs.readFileSync(x, 'utf8');
        const objects = JSON.parse(data);
        return objects;
    
}

const Path = path.join(__dirname, 'dados.json');

const faturamento = read(Path);

let lowest =  faturamento[0].valor, highest = faturamento[0].valor, size = 0, soma = 0, days=0;

faturamento.forEach(item=>{
    if(highest < item.valor) highest=item.valor;
    if(lowest > item.valor) lowest=item.valor;
    if(item.valor > 0){
        size++;
        soma+=item.valor;
    }
});

faturamento.forEach(item=>{
    if(item.valor > 0 && item.valor > (soma/size)){   
        days++;
    }
});

console.log(`O menor valor de faturamento foi ${lowest}\nO maior valor de faturamento foi ${highest}\nO número de dias que o valor foi superior à média mensal foi ${days}`);


