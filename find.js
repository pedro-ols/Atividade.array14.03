//Estabeleço um array;
let numerosArray = ['1', '2', '3', '4', '5', '6',];

console.log(numerosArray);

/*
Método find
O método find cria uma condição e a aplica 
sobre todo um array;
Ele retorna o valor do primeiro elemento 
que a satisfaça;
Como primeiro elemento, entende-se elemento
de menor índice;
Pensando em uma analogia, é como se uma 
criança estivesse buscando um brinquedo de 
dinossauro em uma caixa de brinquedos;
Na caixa, pode-se encontrar diversos 
brinquedos de super-herois, de personagens 
e alguns de dinossauro, tendo lá 
o dinossauro laranja, o verde e o amarelo;
A criança, ao invés de procurar por um dinos-
sauro específico, vai procurar pelo primeiro 
que aparecer, e nada mais, basta ser um dinos-
sauro;
*/

//Exemplo 1:
//explicação de "=>" na linha 52;
let a = numerosArray.find((elemento) => elemento > 4);
/*Declaro uma variável "a" e lhe agrego o valor da ope-
ração numerosArray.find((elemento) => elemento > 4);
É basicamente criada uma variável "elemento" que navegará
por todo o array, seguindo a ordem, com a condição 
"elemento > 4", ela irá puxar o valor de cada elemento 
para si e testar a condição;
Ela descontinuará a operação assim que a condição for
atendida, tendo agregado o valor deste termo para si;
Assim, retornando este valor; 
*/;
//Exibo a variável;
console.log(a); //Saída deve ser 5;
//Saída foi 5;

/*Exemplo 2:
Se nenhum número do array atender a condição, a saída 
é undefined*/;
let b = numerosArray.find((elemento) => elemento > 15);
console.log(b); //Saída deve ser undefined;
//Saída foi Undefined

/*
Arrow function sao funções de javascript (function) com 
sintaxe mais simplificada
Sendo escritas sempre como funções anônimas, ou seja, sendo igualadas a uma variavel, 
sem que a função tenha necessariamente um nome;
Sua sintaxe é "let example = () => ação"
Eu declaro uma variável, igualo ela a uma funcao onde entre os parenteses
eu coloco os parâmetros, em seguida a "arrow" e posteriormente a ação;
Ela tira a necessidade de escrever "function" e de colocar as chaves 
para destacar um bloco de código que expresse ação/operação;
Economizando linhas e, consequentemente, tempo e energia;
*/