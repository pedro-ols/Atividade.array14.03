//Estabeleço um array;
let numerosArray = ['1', '2', 
                   '3', '4'];

console.log(numerosArray);

//Método fill;
//O método fill troca todos os elementos do array por um 
//valor determinado;
//Pensando na analogia da cesta de frutas, é como se eu quisesse
//que uma cesta com bananas, maçãs, laranjas e melancias tivesse
//apenas bananas;

//Exemplo 1:
numerosArray.fill (4);
//Escrevo meuarray.fill (valor escolhido) e com isso digo 
//que quero substituir todos os elementos do array por esse 
//valor;
//No caso, o número escolhido foi 4;

console.log(numerosArray);//Saída deve ser [4, 4, 4, 4];
//Saída foi [4, 4, 4, 4];
   
//Exemplo 2:
numerosArray.fill (128247);
//Digo que quero substituir todos os elementos do array 
//por 128247;

console.log(numerosArray);//Saída deve ser [128247, 128247, 
                                          //128247, 128247];
//Saída foi [128247, 128247, 
           //128247, 128247];