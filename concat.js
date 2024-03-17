//Estabeleço um array;
let numerosArray = ['1', '2', '3'];

console.log(numerosArray);

//Método concat;
//O método concat tem a função de juntar dois
//arrays, os concatenando. Também é possivel 
//adicionar diversos elementos a um array ao 
//mesmo tempo; 
//Pensando na analogia da cesta de frutas, é
//como se eu quisesse que as frutas de uma cesta 
//com maçãs e bananas fosse misturada com as frutas de 
//outra cesta, esta por sua vez, contendo laranjas
//e peras;
//Assim, ao final da operação, eu teria uma cesta com 
//bananas, maçãs, laranjas e peras;

//Exemplo 1:
let concatArray = ['4', '5', '6'];
let juncao = numerosArray.concat(concatArray); //Crio um
//novo array, chamado "concatArray";
//Declaro uma variável chamada juncao (junção), e declaro seu 
//valor como "numerosArray.concat (concatArray)", o que significa
//que todos os elementos de concatArray devem ser concatenados 
//aos de numerosArray;
 
//Exibo juncao;
console.log(juncao);//Saída deve ser [1, 2, 3,
                                    //4, 5, 6];
//Saída foi[1, 2, 3,
          //4, 5, 6];

//Exemplo 2:
//Posso também realizar a mesma operação da seguinte forma:
let a = numerosArray.concat(['4', '5', '6']);
//Neste exemplo, eu crio um novo array chamado a, em seguida 
//agrego-lhe o valor de "numerosArray.concat(['4', '5', '6'])";
//Isso significa que os elementos de "a" correspoderão aos 
//elementos de números array concatenados com as strings 
//'4', '5' e '6';

//Exibo "a";
console.log(a);//Saída deve ser [1, 2, 3,
                              //4, 5, 6];
//Saída foi [1, 2, 3,
           //4, 5, 6];