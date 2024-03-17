//Estabeleço um array com strings;
let meses = ["Jan", "Fev", "Mar", "Abr"];

/*
Método toString
O Método toString transforma todos os 
elementos de um array em uma só string, os
separando por vírgulas;

Exemplo 1:
Crio uma variável "a" e no valor dela, realizo a
operação "meses.toString()";
Nesta operação, eu especifico que quero que 
todos os elementos do array "meses" sejam 
transformados em uma só string;
*/
let a = meses.toString();

//Exibo a minha variável;
console.log(a)/*Saída deve ser "Jan,Fev,Mar,Abr";
Saída foi "Jan,Fev,Mar,Abr";
*/

/*Exemplo 2:
Neste exemplo eu realizarei o mesmo processo
mas com um array numérico;
Estabeleço um array numérico;
*/
let numerosArray = [1, 2, 3];
let b = numerosArray.toString();
console.log(b);
/*Saída deve ser 1,2,3;
Saída foi 1,2,3;
*/