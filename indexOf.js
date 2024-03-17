//Estabeleço um array;
let numerosArray = ['1', '2', '3'];

console.log(numerosArray);

//Método indexOf;
//O método indexOf pode ser usado para encontrar 
//e/ou exibir o índice de um elemento de um array;
//Podemos pensar em uma analogia, supondo uma lista
//de alunos que os organize por nota em ordem crescente;
//Posteriormente, um aluno buscaria saber em que posicão
//ele ficou na lista;  
//Nessa analogia, o trabalho de procurar sua posiçao por 
//toda a lista pode ser feito pelo método indexOf;

//Exemplo 1:
//Primeiro, eu especifico o array que terá o índice de um de 
//seus elementos revelado;
//Crio uma variável e lhe agrego o valor da operação 
//"numerosArray.indexOf()";
//Dentro dos parênteses, eu especifico o elemento cujo índice 
//será retornado;
let i = numerosArray.indexOf('3'); // Digo que quero encontrar o 
//índice do elemento 3;

//Exibo "i";
console.log(i); //Saída deve ser 2;
//Saída foi 2;

//Exemplo 2:
//Supondo agora um array com números ao invés de strings;
let a = [4, 18, 77]; //Crio um array;
let j = a.indexOf(4); //Encontro o índice do elemento 4;

//Exibo "j"
console.log(j); //Saída deve ser 0;
//Saída foi 0;

