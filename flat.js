//Estabeleço um array com sub-array;
numerosArray = [0, 1, 2, [3, 4]];

/*Método flat;
O método flat concatena os elementos 
de um sub-array ao seu array principal;
Pensando em uma analogia, é como se alguém
que tivesse uma necessaire dentro de outra
bolsa quisesse colocar tudo que estiver
dentro da necessaire diretamente dentro da 
bolsa;
O método flat faz a função de extrair o con-
teúdo da necessaire e colocar dentro da bolsa 
principal;
*/

/*Exemplo 1:
Eu exibo o meu array principal e o sigo com o
comando ".flat()" que concatena seus elementos 
com os do sub-array;
*/
console.log(numerosArray.flat());/*Saída deve 
ser [ 0, 1, 2, 
      3, 4];
Saída foi[ 0, 1, 2, 
           3, 4];    
*/

/*Exemplo 2:
Usarei números e strings desta vez;
*/
let b = [1, 2, 3, ["4, 5"]];

//Exibo e opero o método;
console.log(b.flat()); /*Saída deve 
ser [1, 2, 3, 
    '4, 5'];
Saída foi [1, 2, 3, 
          '4, 5']
*/;