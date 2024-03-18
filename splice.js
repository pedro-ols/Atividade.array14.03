//Estabeleço um array;
let numerosArray = ['0', '2', '4'];

console.log(numerosArray);

/*Método splice;
O método splice é usado para substituir um
elemento em específico de um array;
Pensando em uma analogia, é como se alguém 
estivesse fazendo uma lista escrita e em ordem 
alfabética de qualquer tipo de conteúdo;
Ao final da lista, ela percebe que deixou passar
um elemento que deveria estar no meio, ela
então apaga e reescreve a partir de seu erro 
até o final;
O método splice realiza a função de apagar e reescrever;
*/

/*Exemplo 1
Eu especifico o array desejado e opero o seguinte:
'array'.splice(x, y, z), onde:
x = ao índice que será modificado;
y = números de itens substituidos;
z = conteúdo da alteração;
Caso y = 0, todos os elementos seguintes são deslocados 
uma posição para a frente;
*/
numerosArray.splice(1, 0, '1');
/*Digo que quero incluir '1' no índice 1, sem alterar 
nenhum elemento;
*/
//Exibo meu array modificado
console.log (numerosArray)
/*Saída deve ser ['0', '1', '2',
                   3', '4'];
Saída foi['0', '1', '2',
           3', '4'];
*/

/*Exemplo 2:
Realizo a mesma operação, mas agora substituindo elementos;
*/
numerosArray.splice(3, 1, '3');
//digo que quero trocar o conteúdo do elemento 3 po '3';
console.log(numerosArray);
/*Saída deve ser ['0', '1', 
                  '2', '3'];
Saída foi ['0', '1', 
           '2', '3'];
*/
