const impuestos ={
    impuesto1: 2341,
    impuesto2: 341,
    impuesto3:4611,
    impuesto4:111
}

let parLlaveValor = Object.entries(impuestos);
console.log(parLlaveValor)
let soloPropiedades = Objet.keys(impuestos);
console.log(soloPropiedades)
let soloValores = Objet.values(impuestos);
console.log(soloValores);


let impuestoTotal = soloValores.reduce ((valorAcumulado, valorActual)); {
    console.log (`Valores: valorInicial: ${valorActual} y valorAcumulado: ${valorAcumulado}`) ;

    return valorAcumulado + valorActual
}