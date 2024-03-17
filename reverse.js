//Estabeleço um array;
let numerosArray = ['1', '2', '3'];

console.log(numerosArray);

//Método reverse
//O método reverse pode ser usado para inverter 
//a ordem dos elementos de um array;
//Podemos pensar em uma analogia, supondo uma lista
//de alunos que os organize por nota em ordem crescente;
//Posteriormente, um professor reorganizaria essa lista em
//ordem decrescente;
//Nessa analogia, o trabalho de reorganizar a lista toda
//pode ser feita pelo método reverse;

//Exemplo 1:
//Primeiro, eu especifico o array cuja ordem dos elementos
//deve ser trocada;
//Em seguida, o comando ".reverse()" que opera a inversão;
numerosArray.reverse(); //Digo que meu array "numerosArray"
//terá a ordem de seus itens invertidas;
//O array, antes sendo ['1', '2', '3'],
//agora será ['3', '2', '1'];

//Exibo o meu array recém-invertido:
console.log(numerosArray); //Saída deve ser ['3', '2', '1'];
//Saída foi  ['3', '2', '1'];

//Exemplo 2:
//O exemplo anterior foi com strings, este será com números;
//Crio um novo array chamado "a";
let a = [4, 5, 6];
a.reverse(); //Inverto a ordem de seus elementos;
console.log(a); //Saída deve ser [6, 5, 4];
//Saída foi [6, 5, 4];