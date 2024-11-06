//criação de um array chamado de "numbers"
const numbers = [1,2,3,4,5];
//criação de uma função denominada "isOdd", essa função retorna o resto da divisão por 2(pode ser usado para verificar se o número é par)
const isOdd = (x) =>  x % 2;
//criação de uma variável que recebe uma lista de números impares por causa da função filter 
const output = numbers.filter((x)=>isOdd(x));
//mostra no console do browser a lista da variável "output"
console.log(output);
