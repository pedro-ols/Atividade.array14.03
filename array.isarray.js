//Estabeleço um array;
let numerosArray = ['1', '2', '3'];

/*Método Array.isArray
O método Array.isArray analisa uma variável
e analisa se ela é ou não um Array;
Retornando assim, um valor booleano (true ou 
False);

Exemplo 1:
Crio uma nova variável (não array) e a jogo 
para análise*/;
let b;
console.log (Array.isArray(b)); /*Saída deve 
ser "false"*/;
//Saída foi "false";

/*
Exemplo 2:
Realizo a mesma operação, mas agora, eu jogo 
meu array "numerosArray" para análise;

Exibo a análise:
*/
console.log(Array.isArray(numerosArray)); 
/*Saída deve ser "true";
Saída foi "true";
*/
