//boolean
//var vOuF = false;
//console.log(typeof(vOuF));

//number

/*var numeroTeste = 1;
console.log(typeof(numeroTeste));*/

//caracteres

//var nome = 'Adão';
//console.log(typeof(nome));//

var escopoGlobal = 'Paraíba';
console.log(escopoGlobal);

function escopoLocal (){
    let escopoLocalInterno = 'Cabo Branco';
    console.log(escopoLocalInterno);
}
escopoLocal();