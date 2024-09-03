const faturamento = [
    {estado: 'SP',
        valor: 67836.43
    },{estado: 'RJ',
        valor: 36678.66
    },{estado: 'MG',
        valor: 29229.88
    },{estado: 'ES',
        valor: 27165.48
    },{estado: 'OUTROS',
        valor: 19849.53
    }
];

let total = 0;

faturamento.forEach(filial=>{
    total+=filial.valor;
});

faturamento.forEach(filial=>{
    let parte = (filial.valor/total)*100;
    console.log(`A filial de ${filial.estado} representa ${parte.toFixed(2)}% do faturamento mensal da distribuidora`);
});