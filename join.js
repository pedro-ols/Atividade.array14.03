//Estabeleço um array;
let numerosArray = ['1', '2', '3'];

console.log(numerosArray);

//Método join;
//O método join é usado para inserir 
//caracteres de transição entre os
//elementos de um array, substituindo
//a genérica vírgula;
//Deixa o array mais personalizável e
//potencialmente mais organizável;

//Exemplo 1:
//Primeiro, eu especifico o array 
//cujos elementos terão uma transição
//entre si; 
let a = numerosArray.join(" - "); 
//Crio uma variável e agrego-lhe o valor 
//da operação numerosArray.join(" - ");
//Operação essa que inserirá a string " - " 
//entre cada um dos elementos;
console.log (a) //Saída deve ser 1 - 2 - 3;
//Saída foi 1 - 2 - 3;

//Exemplo 2: 
//Agora operando com números ao invés de strings;
let b = [1, 2, 3]; //Crio o array "b";

let c = b.join(" + "); //Crio uma variável c que tem 
//valor da operação b.join(" + "), que insere um sinal 
//de + entre cada elemento de "b";

//Exibo "c";
console.log (c); //Saída deve ser 1 + 2 + 3;
//Saída foi 1 + 2 + 3;
