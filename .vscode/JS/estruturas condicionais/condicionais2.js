/*let array = ['valor1', 'valor2', 'valor3','valor4','valor5', 'valor6'];

let object = {
    propriedade1: 'valor1', propriedade2: 'valor2',propriedade3: 'valor3',propriedade4: 'valor4',propriedade5: 'valor5',propriedade6: 'valor6',
}

//for executa uma ação até que ela seja falsa

for (let indice = 0; indice< array.length; indice++ ){
    console.log(indice);
}*/

/*var w = 0;

while (w < 15){
    w++;
    console.log(w);
}
*/
var numeros = [1, 2, 3, 4, 5];

var maiorNumero = numeros[0];

for (var i = 1; i < numeros.length; i++) {
  if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
  }
}

console.log(maiorNumero);

