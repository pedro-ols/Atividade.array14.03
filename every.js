//Estabeleço um array;
let numerosArray = ['1', '2', '3', '4', '5', '6',];

console.log(numerosArray);

/*
Método every
o Método every estabelece uma condição e retorna 
um valor booleano (true or false);
True: caso todos os elementos atendam à condição;
False: caso um ou mais elementos atendam à condição;
Pensando em uma analogia, é como se um vendedor de 
carne tivesse que verificar se há alguma carne estragada 
em seu estoque;
O método every representaria o trabalho de verificar cada peça 
de carne;
*/

//Exemplo 1:
let a = (i) => i < 40;
/*É basicamente criada uma variável "i" que navegará
por todo o array, seguindo a ordem, com a condição 
"i < 40", ela irá puxar o valor de cada elemento 
para si e testar a condição;
Se todos os elementos forem menores que 40, saída será 
"true";
Se um ou mais elementos não atenderem à condição (>= 40),
saída será "false"*/;

/*Exibo de fato a operação que jogará "a" dentro do array
pra que sua função seja feita*/;
console.log(numerosArray.every(a)); //Saída deve ser "true";
//Saída foi "true";

/*Exemplo 2:
Fazendo agora a mesma operação mas com condição diferente*/;
let b = (i) => i > 1;
//Condição agora é i > 1
console.log(numerosArray.every(b)); //Saída deve ser "false";
//Saída foi "false";
